import { IPlayerState } from './../../core/states';
import * as player from '../actions/player-state';

let initialState: IPlayerState = {
    name: '',
    score: 60,
    isSelected: false,
    hasPlayedQuestion: false,
    hasPlayedRound: false
};

export function playerStateReducer(state: IPlayerState = initialState, action: player.Actions): IPlayerState {
  switch (action.type) {
    case player.ActionTypes.PLAYER_UPDATE_NAME:
      return {
        name: action.payload.name,
        score: state.score,
        isSelected: state.isSelected,
        hasPlayedQuestion: state.hasPlayedQuestion,
        hasPlayedRound: state.hasPlayedRound
      };
    case player.ActionTypes.PLAYER_SCORE_UPDATE_TICK:
      let newScoreAfterTick = state.score - 1;
      return {
        name: state.name,
        score: newScoreAfterTick < 0 ? 0 : newScoreAfterTick,
        isSelected: state.isSelected,
        hasPlayedQuestion: state.hasPlayedQuestion,
        hasPlayedRound: state.hasPlayedRound
      };
    case player.ActionTypes.PLAYER_SCORE_UPDATE_ADD_SECONDS:
      let newScoreAfterAdd = state.score + action.payload.secondsToAdd;
      return {
        name: state.name,
        score: newScoreAfterAdd < 0 ? 0 : newScoreAfterAdd,
        isSelected: state.isSelected,
        hasPlayedQuestion: state.hasPlayedQuestion,
        hasPlayedRound: state.hasPlayedRound
      };
    default:
      return state;
  }
};
