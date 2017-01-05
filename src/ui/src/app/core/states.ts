import { IQuiz } from './models';

export interface IState {
  scoreState: IScoreState;
  quizState: IQuizState;
}

export interface IScoreState {
  player1: IPlayerState;
  player2: IPlayerState;
  player3: IPlayerState;
}

export interface IPlayerState {
  name: string;
  score: number;
}

export interface IQuizState {
  quizzes: Array<IQuiz>;
  selectedQuiz?: IQuiz;
}

