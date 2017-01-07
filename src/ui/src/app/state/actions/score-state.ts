import { IPlayerState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SCORE_UPDATE_PLAYERS: type('SCORE_UPDATE_PLAYERS')
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

export type Actions = ScoreUpdatePlayers;
