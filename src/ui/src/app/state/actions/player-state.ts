import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  PLAYER_UPDATE_NAME: type('PLAYER_UPDATE_NAME'),
  PLAYER_SCORE_UPDATE_TICK: type('PLAYER_SCORE_UPDATE_TICK'),
  PLAYER_SCORE_UPDATE_ADD_SECONDS: type('PLAYER_SCORE_UPDATE_ADD_SECONDS')
};

export class PlayerUpdateName implements Action {
  type = ActionTypes.PLAYER_UPDATE_NAME;
  payload: { name: string };

  public constructor(name: string) {
    this.payload = { name: name };
  }
}

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
  | PlayerUpdateAddSeconds
  | PlayerUpdateName;
