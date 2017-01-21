import { QuizThreeSixNineNextQuestion, QuizPuzzlesNextPuzzle, QuizPuzzlesAnsweredPuzzleQuestion } from './../actions/quiz-state';
import { QuizzesBuilder } from './../../test-utils/quizzes-builder';
import { IQuiz } from './../../core/models';
import { IQuizState } from './../../core/states';
import { quizStateReducer } from './quiz-state.reducer';
import { QuizUpdateAll, QuizUpdateSelected } from '../actions/quiz-state';

let deepfreeze = require('deep-freeze');
describe('reduce quiz state', () => {
  let quizzesBuilder = new QuizzesBuilder();

  describe('case QUIZ_UPDATE_ALL', () => {
    let initialState: IQuizState = {
      quizzes: [],
      threeSixNine: {
        numberOfQuestion: 0,
        question: {
          question: null,
          answer: null
        }
      },
      puzzle: null,
    };

    it('returns a new instance with expected quizzes', () => {
      let quizzes: Array<IQuiz> = quizzesBuilder.createQuizzes();

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizUpdateAll(quizzes));

      expect(initialState).not.toBe(changedState);
      expect(changedState.quizzes.length).toBeGreaterThan(0);
    });
  });

  describe('case QUIZ_UPDATE_SELECTED', () => {
    let initialState: IQuizState = {
      quizzes: [],
      selectedQuiz: null,
      threeSixNine: {
        numberOfQuestion: 0,
        question: {
          question: null,
          answer: null
        }
      },
      puzzle: null,
    };

    it('returns a new instance with expected selected quiz', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizUpdateSelected(quiz));

      expect(initialState).not.toBe(changedState);
      expect(changedState.selectedQuiz).not.toBe(null);
      expect(changedState.selectedQuiz).toBe(quiz);
    });
  });

  describe('case QUIZ_THREE_SIX_NINE_NEXT_QUESTION', () => {
    let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];

    it('returns a new instance with expected question', () => {
      let initialState: IQuizState = {
      quizzes: [],
      selectedQuiz: quiz,
      threeSixNine: {
        numberOfQuestion: 0,
        question: {
          question: null,
          answer: null
        }
      },
      puzzle: null,
    };
      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizThreeSixNineNextQuestion());

      expect(initialState).not.toBe(changedState);
      expect(changedState.threeSixNine.numberOfQuestion).toBe(1);
      expect(changedState.threeSixNine.question).toBe(quiz.threeSixNine[1]);
    });

    it('returns a new instance with no question and number 0 when last question was asked', () => {
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: {
          numberOfQuestion: 15,
          question: quiz.threeSixNine[15]
        },
        puzzle: null,
      };
      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizThreeSixNineNextQuestion());

      expect(initialState).not.toBe(changedState);
      expect(changedState.threeSixNine.numberOfQuestion).toBe(0);
      expect(changedState.threeSixNine.question.question).toBeNull();
      expect(changedState.threeSixNine.question.answer).toBeNull();
    });

    it('give no quiz is selected returns a new instance with no question and number 0', () => {
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: null,
        threeSixNine: {
          numberOfQuestion: 0,
          question: {
            question: null,
            answer: null
          }
        },
        puzzle: null,
      };
      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizThreeSixNineNextQuestion());

      expect(initialState).not.toBe(changedState);
      expect(changedState.threeSixNine.numberOfQuestion).toBe(0);
      expect(changedState.threeSixNine.question.question).toBeNull();
      expect(changedState.threeSixNine.question.answer).toBeNull();
    });
  });

  describe('case QUIZ_PUZZLES_NEXT_PUZZLE', () => {
    it('given no puzzles played returns a new instance with the first puzzle', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: null,
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesNextPuzzle());

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.puzzle).toBe(quiz.puzzles.firstPuzzle);
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered2).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });

     it('given first puzzle is played returns a new instance with the second puzzle', () => {
       let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
       let initialState: IQuizState = {
         quizzes: [],
         selectedQuiz: quiz,
         threeSixNine: null,
         puzzle: {
           puzzle: quiz.puzzles.firstPuzzle,
           answered1: true,
           answered2: true,
           answered3: true
         }
       };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesNextPuzzle());

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.puzzle).toBe(quiz.puzzles.secondPuzzle);
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered2).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });

     it('given first and second puzzle played returns a new instance with the third puzzle', () => {
       let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
       let initialState: IQuizState = {
         quizzes: [],
         selectedQuiz: quiz,
         threeSixNine: null,
         puzzle: {
           puzzle: quiz.puzzles.secondPuzzle,
           answered1: true,
           answered2: true,
           answered3: true
         }
       };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesNextPuzzle());

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.puzzle).toBe(quiz.puzzles.thirdPuzzle);
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered2).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });

    it('given third puzzle played returns a new instance with null puzzle', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: {
           puzzle: quiz.puzzles.thirdPuzzle,
           answered1: true,
           answered2: true,
           answered3: true
         }
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesNextPuzzle());

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.puzzle).toBeNull();
    });
  });

   describe('case QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION', () => {
    it('given answered first question returns a new instance with the answered1 truthy', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: {
          puzzle: quiz.puzzles.firstPuzzle,
          answered1: false,
          answered2: false,
          answered3: false,
        },
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesAnsweredPuzzleQuestion(quiz.puzzles.firstPuzzle[1].answer));

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.answered1).toBeTruthy();
      expect(changedState.puzzle.answered2).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });

    it('given answered second question returns a new instance with the answered2 truthy', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: {
          puzzle: quiz.puzzles.firstPuzzle,
          answered1: false,
          answered2: false,
          answered3: false,
        },
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesAnsweredPuzzleQuestion(quiz.puzzles.firstPuzzle[2].answer));

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.answered2).toBeTruthy();
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });

    it('given answered third question returns a new instance with the answered3 truthy', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: {
          puzzle: quiz.puzzles.firstPuzzle,
          answered1: false,
          answered2: false,
          answered3: false,
        },
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesAnsweredPuzzleQuestion(quiz.puzzles.firstPuzzle[3].answer));

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.answered3).toBeTruthy();
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered2).toBeFalsy();
    });

     it('give wrong answer returns a new instance with the all answered falsy', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: quiz,
        threeSixNine: null,
        puzzle: {
          puzzle: quiz.puzzles.firstPuzzle,
          answered1: false,
          answered2: false,
          answered3: false,
        },
      };

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizPuzzlesAnsweredPuzzleQuestion('test'));

      expect(changedState).not.toBe(initialState);
      expect(changedState.puzzle.answered1).toBeFalsy();
      expect(changedState.puzzle.answered2).toBeFalsy();
      expect(changedState.puzzle.answered3).toBeFalsy();
    });
  });
});


