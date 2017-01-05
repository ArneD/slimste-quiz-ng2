import { IScoreState, IPlayerState } from './../../core/states';
import * as score from '../actions/player-state';

let initialState: IPlayerState = {
    name: '',
    score: 60
};

export function playerStateReducer(state: IPlayerState = initialState, action: score.Actions): IPlayerState {
  switch (action.type) {
    case score.ActionTypes.SCORES_UPDATE_TICK:
      let newScoreAfterTick = state.score - 1;
      return {
        name: state.name,
        score: newScoreAfterTick < 0 ? 0 : newScoreAfterTick
      };
    case score.ActionTypes.SCORES_UPDATE_ADD_SECONDS:
      let newScoreAfterAdd = state.score + action.payload.secondsToAdd;
      return {
        name: state.name,
        score: newScoreAfterAdd < 0 ? 0 : newScoreAfterAdd
      };
    default:
      return state;
  }
};
