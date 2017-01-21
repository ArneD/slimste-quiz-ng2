import { IPuzzle } from './../../core/models';
import { ActionTypes } from './../actions/quiz-state';
import { IQuizState } from './../../core/states';
import * as quiz from '../actions/quiz-state';

let initialState: IQuizState = {
    quizzes: [],
    threeSixNine: {
      numberOfQuestion: 0,
      question: {
        question: '',
        answer: ''
      }
    },
    puzzle: {
      puzzle: null,
      answered1: false,
      answered2: false,
      answered3: false
    }
};

export function quizStateReducer(state: IQuizState = initialState, action: quiz.Actions): IQuizState {
  switch (action.type) {
    case quiz.ActionTypes.QUIZ_UPDATE_ALL:
      return {
        selectedQuiz: state.selectedQuiz,
        quizzes: action.payload.quizzes,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle
      };
    case quiz.ActionTypes.QUIZ_UPDATE_SELECTED:
      return {
        selectedQuiz: action.payload.quiz,
        quizzes: state.quizzes,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle
      };
    case quiz.ActionTypes.QUIZ_THREE_SIX_NINE_NEXT_QUESTION:
      let nextNumber = state.threeSixNine.numberOfQuestion + 1;
      if (!state.selectedQuiz || nextNumber > 15) {
        return {
          quizzes: state.quizzes,
          selectedQuiz: state.selectedQuiz,
          threeSixNine: {
            numberOfQuestion: 0,
            question: {
              question: null,
              answer: null
            }
          },
          puzzle: state.puzzle
        };
      }
      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: {
          numberOfQuestion: nextNumber,
          question: state.selectedQuiz.threeSixNine[nextNumber]
        },
        puzzle: state.puzzle
      };
    case quiz.ActionTypes.QUIZ_PUZZLES_NEXT_PUZZLE:
      let puzzle: IPuzzle = null;
      if (!state.selectedQuiz.puzzles.firstPuzzle.played) {
        puzzle = state.selectedQuiz.puzzles.firstPuzzle;
      } else if (!state.selectedQuiz.puzzles.secondPuzzle.played) {
        puzzle = state.selectedQuiz.puzzles.secondPuzzle;
      } else if (!state.selectedQuiz.puzzles.thirdPuzzle.played) {
        puzzle = state.selectedQuiz.puzzles.thirdPuzzle;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: {
          puzzle: puzzle,
          answered1: false,
          answered2: false,
          answered3: false
        }
      };
    case quiz.ActionTypes.QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION:
      let answered1 = state.puzzle.answered1;
      let answered2 = state.puzzle.answered2;
      let answered3 = state.puzzle.answered3;
      if (!state.puzzle.answered1 && state.puzzle.puzzle[1].answer === action.payload.answer) {
        answered1 = true;
      } else if (!state.puzzle.answered2 && state.puzzle.puzzle[2].answer === action.payload.answer) {
        answered2 = true;
      } else if (!state.puzzle.answered3 && state.puzzle.puzzle[3].answer === action.payload.answer) {
        answered3 = true;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: {
          puzzle: state.puzzle.puzzle,
          answered1: answered1,
          answered2: answered2,
          answered3: answered3,
        }
      };
    default:
      return state;
  }
};
