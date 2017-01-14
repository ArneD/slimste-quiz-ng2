import { IPlayerState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SCORE_UPDATE_PLAYERS: type('SCORE_UPDATE_PLAYERS'),
  SCORE_INCREASE_SELECTED_PLAYER: type('SCORE_INCREASE_SELECTED_PLAYER'),
  SCORE_RESET_HAS_PLAYED: type('SCORE_RESET_HAS_PLAYED'),
  SCORE_PLAYER_PLAYED: type('SCORE_PLAYER_PLAYED'),
  SCORE_SELECT_PLAYER: type('SCORE_SELECT_PLAYER'),
};

export class ScoreUpdatePlayers implements Action {
  type = ActionTypes.SCORE_UPDATE_PLAYERS;
  payload: { player1: IPlayerState, player2: IPlayerState, player3: IPlayerState };

  public constructor(player1: IPlayerState, player2: IPlayerState, player3: IPlayerState) {
    this.payload = {
      player1: player1,
      player2: player2,
      player3: player3
    };
  }
}

export class ScoreIncreaseSelectedPlayer implements Action {
  type = ActionTypes.SCORE_INCREASE_SELECTED_PLAYER;
  payload: { scoreToAdd: number };

  public constructor(scoreToAdd: number) {
    this.payload = {
      scoreToAdd: scoreToAdd
    };
  }
}

export class ScoreResetHasPlayed implements Action {
  type = ActionTypes.SCORE_RESET_HAS_PLAYED;

  public constructor() { }
}

export class ScorePlayerPlayed implements Action {
  type = ActionTypes.SCORE_PLAYER_PLAYED;
  payload: { player: IPlayerState };

  public constructor(player: IPlayerState) {
    this.payload = { player: player };
  }
}

export class ScoreSelectPlayer implements Action {
  type = ActionTypes.SCORE_SELECT_PLAYER;
  payload: { player: IPlayerState };

  public constructor(player: IPlayerState) {
    this.payload = { player: player };
  }
}

export type Actions = ScoreUpdatePlayers
  | ScoreIncreaseSelectedPlayer
  | ScoreResetHasPlayed
  | ScorePlayerPlayed
  | ScoreSelectPlayer;
