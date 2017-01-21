import { IQuiz, IThreeSixNineQuestion, IPuzzle } from './models';

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
  isSelected: boolean;
  hasPlayedQuestion: boolean;
  hasPlayedRound: boolean;
}

export interface IQuizState {
  quizzes: Array<IQuiz>;
  selectedQuiz?: IQuiz;
  threeSixNine: IThreeSixNineState;
  puzzle: IPuzzleState;
}

export interface IThreeSixNineState {
  question: IThreeSixNineQuestion;
  numberOfQuestion: number;
}

export interface IPuzzleState {
  puzzle: IPuzzle;
  answered1: boolean;
  answered2: boolean;
  answered3: boolean;
}

