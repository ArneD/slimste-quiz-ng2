import { QuizzesBuilder } from './../../test-utils/quizzes-builder';
import { IQuiz } from './../../core/models';
import { IQuizState } from './../../core/states';
import { quizStateReducer } from './quiz-state.reducer';
import { QuizzesUpdateAll, QuizzesUpdateSelected } from '../actions/quiz-state';

let deepfreeze = require('deep-freeze');
describe('reduce quiz state', () => {
  let quizzesBuilder = new QuizzesBuilder();

  describe('case QUIZZES_UPDATE_ALL', () => {
    let initialState: IQuizState = {
      quizzes: []
    };

    it('returns a new instance with expected quizzes', () => {
      let quizzes: Array<IQuiz> = quizzesBuilder.createQuizzes();

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizzesUpdateAll(quizzes));

      expect(initialState).not.toBe(changedState);
      expect(changedState.quizzes.length).toBeGreaterThan(0);
    });
  });

  describe('case QUIZZES_UPDATE_SELECTED', () => {
    let initialState: IQuizState = {
      quizzes: [],
      selectedQuiz: null
    };

    it('returns a new instance with expected selected quiz', () => {
      let quiz: IQuiz = quizzesBuilder.createQuizzes()[0];

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizzesUpdateSelected(quiz));

      expect(initialState).not.toBe(changedState);
      expect(changedState.selectedQuiz).not.toBe(null);
      expect(changedState.selectedQuiz).toBe(quiz);
    });
  });
});
