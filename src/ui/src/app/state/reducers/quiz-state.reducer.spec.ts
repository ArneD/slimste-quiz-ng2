import { QuizzesBuilder } from './../../test-utils/quizzes-builder';
import { IQuiz } from './../../core/models';
import { IQuizState } from './../../core/states';
import { quizStateReducer } from './quiz-state.reducer';
import { QuizzesUpdateAll } from '../actions/quiz-state';

let deepfreeze = require('deep-freeze');
describe('reduce player state', () => {
  let quizzesBuilder = new QuizzesBuilder();

  describe('case SCORE_UPDATE_PLAYERS', () => {
    let initialState: IQuizState = {
      quizzes: []
    };

    it('returns a new instance with expected players', () => {
      let quizzes: Array<IQuiz> = quizzesBuilder.createQuizzes();

      deepfreeze(initialState);

      let changedState: IQuizState = quizStateReducer(initialState,
          new QuizzesUpdateAll(quizzes));

      expect(initialState).not.toBe(changedState);
      expect(changedState.quizzes.length).toBeGreaterThan(0);
    });
  });
});
