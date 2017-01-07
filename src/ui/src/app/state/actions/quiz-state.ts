import { IQuiz } from './../../core/models';
import { IQuizState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  QUIZZES_UPDATE_ALL: type('QUIZZES_UPDATE_ALL'),
  QUIZZES_UPDATE_SELECTED: type('QUIZZES_UPDATE_SELECTED')
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

export class QuizzesUpdateSelected implements Action {
  type = ActionTypes.QUIZZES_UPDATE_SELECTED;
  payload: { quiz: IQuiz };

  public constructor(quiz: IQuiz) {
    this.payload = {
      quiz: quiz
    };
  }
}

export type Actions = QuizzesUpdateAll
  | QuizzesUpdateSelected;
