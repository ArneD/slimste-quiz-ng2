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
    }
};

export function quizStateReducer(state: IQuizState = initialState, action: quiz.Actions): IQuizState {
  switch (action.type) {
    case quiz.ActionTypes.QUIZ_UPDATE_ALL:
      return {
        selectedQuiz: state.selectedQuiz,
        quizzes: action.payload.quizzes,
        threeSixNine: state.threeSixNine
      };
    case quiz.ActionTypes.QUIZ_UPDATE_SELECTED:
      return {
        selectedQuiz: action.payload.quiz,
        quizzes: state.quizzes,
        threeSixNine: state.threeSixNine
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
          }
        };
      }
      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: {
          numberOfQuestion: nextNumber,
          question: state.selectedQuiz.threeSixNine[nextNumber]
        }
      };
    default:
      return state;
  }
};
