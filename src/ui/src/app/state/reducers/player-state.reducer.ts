import { IScoreState, IPlayerState } from './../../core/states';
import * as score from '../actions/player-state';

let initialState: IPlayerState = {
    name: '',
    score: 60
};

export function playerStateReducer(state: IPlayerState = initialState, action: score.Actions): IPlayerState {
  switch (action.type) {
    case score.ActionTypes.SCORES_UPDATE_TICK:
      return {
        name: state.name,
        score: state.score - 1
      };
    case score.ActionTypes.SCORES_UPDATE_ADD_SECONDS:
      return {
        name: state.name,
        score: state.score + action.payload.secondsToAdd
      };
    default:
      return state;
  }
};
