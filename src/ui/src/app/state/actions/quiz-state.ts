import { IQuiz, IThreeSixNineRound, IPuzzleQuestion } from './../../core/models';
import { IQuizState, IVideoAnswer } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  QUIZ_UPDATE_ALL: type('QUIZ_UPDATE_ALL'),
  QUIZ_UPDATE_SELECTED: type('QUIZ_UPDATE_SELECTED'),
  QUIZ_THREE_SIX_NINE_NEXT_QUESTION: type('QUIZ_THREE_SIX_NINE_NEXT_QUESTION'),
  QUIZ_PUZZLES_NEXT_PUZZLE: type('QUIZ_PUZZLES_NEXT_PUZZLE'),
  QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION: type('QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION'),
  QUIZ_GALLERY_NEXT_GALLERY: type('QUIZ_GALLERY_NEXT_GALLERY'),
  QUIZ_GALLERY_NEXT_GALLERY_QUESTION: type('QUIZ_GALLERY_NEXT_GALLERY_QUESTION'),
  QUIZ_VIDEO_NEXT_VIDEO: type('QUIZ_VIDEO_NEXT_VIDEO'),
  QUIZ_VIDEO_PLAY_VIDEO: type('QUIZ_VIDEO_PLAY_VIDEO'),
  QUIZ_VIDEO_ANSWERED_VIDEO_QUESTION: type('QUIZ_VIDEO_ANSWERED_VIDEO_QUESTION'),
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

export class QuizPuzzlesNextPuzzle implements Action {
  type = ActionTypes.QUIZ_PUZZLES_NEXT_PUZZLE;

  public constructor() { }
}

export class QuizPuzzlesAnsweredPuzzleQuestion implements Action {
  type = ActionTypes.QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION;
  payload: { answer: string };

  public constructor(answer: string) {
    this.payload = { answer: answer };
  }
}

export class QuizGalleryNextGallery implements Action {
  type = ActionTypes.QUIZ_GALLERY_NEXT_GALLERY;

  public constructor() { }
}

export class QuizGalleryNextGalleryQuestion implements Action {
  type = ActionTypes.QUIZ_GALLERY_NEXT_GALLERY_QUESTION;

  public constructor() { }
}

export class QuizVideoNextVideo implements Action {
  type = ActionTypes.QUIZ_VIDEO_NEXT_VIDEO;

  public constructor() { }
}

export class QuizVideoPlayVideo implements Action {
  type = ActionTypes.QUIZ_VIDEO_PLAY_VIDEO;

  public constructor() { }
}

export class QuizVideoAnsweredQuestion implements Action {
  type = ActionTypes.QUIZ_VIDEO_ANSWERED_VIDEO_QUESTION;
  payload: { answer: string, points: number };

  public constructor(answer: string, points: number) {
    this.payload = { answer: answer, points: points };
  }
}

export type Actions = QuizUpdateAll
  | QuizUpdateSelected
  | QuizThreeSixNineNextQuestion
  | QuizPuzzlesNextPuzzle
  | QuizPuzzlesAnsweredPuzzleQuestion
  | QuizGalleryNextGallery
  | QuizGalleryNextGalleryQuestion
  | QuizVideoNextVideo
  | QuizVideoPlayVideo
  | QuizVideoAnsweredQuestion;
