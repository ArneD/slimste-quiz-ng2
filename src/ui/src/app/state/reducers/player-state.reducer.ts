import { IScoreState, IPlayerState } from './../../core/states';
import * as score from '../actions/player-state';

let initialState: IPlayerState = {
    name: '',
    score: 60,
    isSelected: false
};

export function playerStateReducer(state: IPlayerState = initialState, action: score.Actions): IPlayerState {
  switch (action.type) {
    case score.ActionTypes.PLAYER_SCORE_UPDATE_TICK:
      let newScoreAfterTick = state.score - 1;
      return {
        name: state.name,
        score: newScoreAfterTick < 0 ? 0 : newScoreAfterTick,
        isSelected: state.isSelected
      };
    case score.ActionTypes.PLAYER_SCORE_UPDATE_ADD_SECONDS:
      let newScoreAfterAdd = state.score + action.payload.secondsToAdd;
      return {
        name: state.name,
        score: newScoreAfterAdd < 0 ? 0 : newScoreAfterAdd,
        isSelected: state.isSelected
      };
    default:
      return state;
  }
};
