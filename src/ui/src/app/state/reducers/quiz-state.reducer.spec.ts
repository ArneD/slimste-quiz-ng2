import { QuizThreeSixNineNextQuestion } from './../actions/quiz-state';
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
      }
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
      }
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
      }
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
        }
      };
      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizThreeSixNineNextQuestion());

      expect(initialState).not.toBe(changedState);
      expect(changedState.threeSixNine.numberOfQuestion).toBe(0);
      expect(changedState.threeSixNine.question.question).toBeNull();
      expect(changedState.threeSixNine.question.answer).toBeNull();
    });

    it('returns a new instance with no question and number 0 when no quiz is selected', () => {
      let initialState: IQuizState = {
        quizzes: [],
        selectedQuiz: null,
        threeSixNine: {
          numberOfQuestion: 0,
          question: {
            question: null,
            answer: null
          }
        }
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
});
