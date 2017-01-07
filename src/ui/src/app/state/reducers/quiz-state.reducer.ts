import { ActionTypes } from './../actions/quiz-state';
import { IQuizState } from './../../core/states';
import * as quiz from '../actions/quiz-state';

let initialState: IQuizState = {
    quizzes: []
};

export function quizStateReducer(state: IQuizState = initialState, action: quiz.Actions): IQuizState {
  switch (action.type) {
    case quiz.ActionTypes.QUIZZES_UPDATE_ALL:
      return {
        selectedQuiz: state.selectedQuiz,
        quizzes: action.payload.quizzes
      };
    default:
      return state;
  }
};
