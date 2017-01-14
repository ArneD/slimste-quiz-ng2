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
      } else if (state.player2.isSelected) {
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
    case score.ActionTypes.SCORE_RESET_HAS_PLAYED:
      return {
        player1: createPlayerWithHasPlayed(state.player1, false),
        player2: createPlayerWithHasPlayed(state.player2, false),
        player3: createPlayerWithHasPlayed(state.player3, false),
      };
    case score.ActionTypes.SCORE_PLAYER_PLAYED:
      if (state.player1.name === action.payload.player.name) {
        return {
          player1: createPlayerWithHasPlayed(state.player1, true),
          player2: state.player2,
          player3: state.player3
        };
      } else if (state.player2.name === action.payload.player.name) {
        return {
          player1: state.player1,
          player2: createPlayerWithHasPlayed(state.player2, true),
          player3: state.player3
        };
      }
      return {
          player1: state.player1,
          player2: state.player2,
          player3: createPlayerWithHasPlayed(state.player3, true),
      };
    case score.ActionTypes.SCORE_SELECT_PLAYER:
      if (state.player1.name === action.payload.player.name) {
        return {
          player1: createPlayerWithIsSelected(state.player1, true),
          player2: createPlayerWithIsSelected(state.player2, false),
          player3: createPlayerWithIsSelected(state.player3, false),
        };
      } else if (state.player2.name === action.payload.player.name) {
        return {
          player1: createPlayerWithIsSelected(state.player1, false),
          player2: createPlayerWithIsSelected(state.player2, true),
          player3: createPlayerWithIsSelected(state.player3, false),
        };
      }
      return {
          player1: createPlayerWithIsSelected(state.player1, false),
          player2: createPlayerWithIsSelected(state.player2, false),
          player3: createPlayerWithIsSelected(state.player3, true),
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
    };
  }

  function createPlayerWithHasPlayed(player: IPlayerState, hasPlayed: boolean): IPlayerState {
    return {
      name: player.name,
      hasPlayed: hasPlayed,
      isSelected: player.isSelected,
      score: player.score
    };
  }

  function createPlayerWithIsSelected(player: IPlayerState, isSelected: boolean): IPlayerState {
    return {
      name: player.name,
      hasPlayed: player.hasPlayed,
      isSelected: isSelected,
      score: player.score
    };
  }
};
