import { IPlayerState } from './../../core/states';
import * as score from '../actions/player-state';

let initialState: IPlayerState = {
    name: '',
    score: 60,
    isSelected: false,
    hasPlayed: false
};

export function playerStateReducer(state: IPlayerState = initialState, action: score.Actions): IPlayerState {
  switch (action.type) {
    case score.ActionTypes.PLAYER_UPDATE_NAME:
      return {
        name: action.payload.name,
        score: state.score,
        isSelected: state.isSelected,
        hasPlayed: state.hasPlayed
      };
    case score.ActionTypes.PLAYER_SCORE_UPDATE_TICK:
      let newScoreAfterTick = state.score - 1;
      return {
        name: state.name,
        score: newScoreAfterTick < 0 ? 0 : newScoreAfterTick,
        isSelected: state.isSelected,
        hasPlayed: state.hasPlayed
      };
    case score.ActionTypes.PLAYER_SCORE_UPDATE_ADD_SECONDS:
      let newScoreAfterAdd = state.score + action.payload.secondsToAdd;
      return {
        name: state.name,
        score: newScoreAfterAdd < 0 ? 0 : newScoreAfterAdd,
        isSelected: state.isSelected,
        hasPlayed: state.hasPlayed
      };
    default:
      return state;
  }
};
