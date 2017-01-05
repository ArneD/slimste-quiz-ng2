import { IScoreState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  PLAYER_SCORE_UPDATE_TICK: type('PLAYER_SCORE_UPDATE_TICK'),
  PLAYER_SCORE_UPDATE_ADD_SECONDS: type('PLAYER_SCORE_UPDATE_ADD_SECONDS')
};

export class PlayerUpdateScoreTick implements Action {
  type = ActionTypes.PLAYER_SCORE_UPDATE_TICK;

  public constructor() {
  }
}

export class PlayerUpdateAddSeconds implements Action {
  type = ActionTypes.PLAYER_SCORE_UPDATE_ADD_SECONDS;
  payload: {secondsToAdd: number };

  public constructor(secondsToAdd: number) {
    this.payload = { secondsToAdd: secondsToAdd };
  }
}

export type Actions = PlayerUpdateScoreTick
  | PlayerUpdateAddSeconds;
