import { IQuiz, IThreeSixNineRound } from './../../core/models';
import { IQuizState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  QUIZ_UPDATE_ALL: type('QUIZ_UPDATE_ALL'),
  QUIZ_UPDATE_SELECTED: type('QUIZ_UPDATE_SELECTED'),
  QUIZ_THREE_SIX_NINE_NEXT_QUESTION: type('QUIZ_THREE_SIX_NINE_NEXT_QUESTION')
};

export class QuizUpdateAll implements Action {
  type = ActionTypes.QUIZ_UPDATE_ALL;
  payload: { quizzes: Array<IQuiz> };

  public constructor(quizzes: Array<IQuiz>) {
    this.payload = {
      quizzes: quizzes
    };
  }
}

export class QuizUpdateSelected implements Action {
  type = ActionTypes.QUIZ_UPDATE_SELECTED;
  payload: { quiz: IQuiz };

  public constructor(quiz: IQuiz) {
    this.payload = {
      quiz: quiz
    };
  }
}


export class QuizThreeSixNineNextQuestion implements Action {
  type = ActionTypes.QUIZ_THREE_SIX_NINE_NEXT_QUESTION;

  public constructor() {
  }
}

export type Actions = QuizUpdateAll
  | QuizUpdateSelected
  | QuizThreeSixNineNextQuestion;
