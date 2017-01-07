import { IPlayerState, IScoreState } from './../../core/states';
import * as score from '../actions/score-state';

let initialState: IScoreState = {
    player1: {
      name: 'Player 1',
      score: 60,
      isSelected: true,
      hasPlayed: false
    },
    player2: {
      name: 'Player 2',
      score: 60,
      isSelected: false,
      hasPlayed: false
    },
    player3: {
      name: 'Player 3',
      score: 60,
      isSelected: false,
      hasPlayed: false
    }
};

export function scoreStateReducer(state: IScoreState = initialState, action: score.Actions): IScoreState {
  switch (action.type) {
    case score.ActionTypes.SCORE_UPDATE_PLAYERS:
      return {
        player1: action.payload.player1,
        player2: action.payload.player2,
        player3: action.payload.player3,
      };
    default:
      return state;
  }
};
