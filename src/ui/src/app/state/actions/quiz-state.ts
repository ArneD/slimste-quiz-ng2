import { IQuiz } from './../../core/models';
import { IQuizState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  QUIZZES_UPDATE_ALL: type('QUIZZES_UPDATE_ALL')
};

export class QuizzesUpdateAll implements Action {
  type = ActionTypes.QUIZZES_UPDATE_ALL;
  payload: { quizzes: Array<IQuiz> };

  public constructor(quizzes: Array<IQuiz>) {
    this.payload = {
      quizzes: quizzes
    };
  }
}

export type Actions = QuizzesUpdateAll;
