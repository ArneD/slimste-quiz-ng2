import { IScoreState } from './../../core/states';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SCORES_UPDATE_TICK: type('SCORES_UPDATE_TICK'),
  SCORES_UPDATE_ADD_SECONDS: type('SCORES_UPDATE_ADD_SECONDS')
};

export class UpdateScoreTick implements Action {
  type = ActionTypes.SCORES_UPDATE_TICK;

  public constructor() {
  }
}

export class UpdateAddSeconds implements Action {
  type = ActionTypes.SCORES_UPDATE_ADD_SECONDS;
  payload: {secondsToAdd: number };

  public constructor(secondsToAdd: number) {
    this.payload = { secondsToAdd: secondsToAdd };
  }
}

export type Actions = UpdateScoreTick
  | UpdateAddSeconds;
