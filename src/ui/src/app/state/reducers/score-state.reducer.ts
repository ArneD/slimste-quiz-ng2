import { IPlayerState, IScoreState, IState } from './../../core/states';
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
    case score.ActionTypes.SCORE_INCREASE_SELECTED_PLAYER:
      if (state.player1.isSelected) {
        return {
          player1: createPlayerWithAddedScore(state.player1, action.payload.scoreToAdd),
          player2: state.player2,
          player3: state.player3
        };
      } else if(state.player2.isSelected) {
        return {
          player2: createPlayerWithAddedScore(state.player2, action.payload.scoreToAdd),
          player1: state.player1,
          player3: state.player3
        };
      }
      return {
          player3: createPlayerWithAddedScore(state.player3, action.payload.scoreToAdd),
          player2: state.player2,
          player1: state.player1
        };
    default:
      return state;
  }

  function createPlayerWithAddedScore(player: IPlayerState, scoreToAdd: number): IPlayerState {
    return {
      name: player.name,
      hasPlayed: player.hasPlayed,
      isSelected: player.isSelected,
      score: player.score + scoreToAdd
    }
  }
};
