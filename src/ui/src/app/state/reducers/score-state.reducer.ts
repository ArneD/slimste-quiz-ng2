import { IPlayerState, IScoreState, IState } from './../../core/states';
import * as score from '../actions/score-state';

let initialState: IScoreState = {
    player1: {
      name: 'Player 1',
      score: 60,
      isSelected: true,
      hasPlayedQuestion: false,
      hasPlayedRound: false
    },
    player2: {
      name: 'Player 2',
      score: 60,
      isSelected: false,
      hasPlayedQuestion: false,
      hasPlayedRound: false
    },
    player3: {
      name: 'Player 3',
      score: 60,
      isSelected: false,
      hasPlayedQuestion: false,
      hasPlayedRound: false
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
    case score.ActionTypes.SCORE_RESET_HAS_PLAYED_QUESTION:
      return {
        player1: createPlayerWithHasPlayedQuestion(state.player1, false),
        player2: createPlayerWithHasPlayedQuestion(state.player2, false),
        player3: createPlayerWithHasPlayedQuestion(state.player3, false),
      };
     case score.ActionTypes.SCORE_RESET_HAS_PLAYED_ROUND:
      return {
        player1: createPlayerWithHasPlayedRound(state.player1, false),
        player2: createPlayerWithHasPlayedRound(state.player2, false),
        player3: createPlayerWithHasPlayedRound(state.player3, false),
      };
    case score.ActionTypes.SCORE_PLAYER_PLAYED_QUESTION:
      if (state.player1.name === action.payload.player.name) {
        return {
          player1: createPlayerWithHasPlayedQuestion(state.player1, true),
          player2: state.player2,
          player3: state.player3
        };
      } else if (state.player2.name === action.payload.player.name) {
        return {
          player1: state.player1,
          player2: createPlayerWithHasPlayedQuestion(state.player2, true),
          player3: state.player3
        };
      }
      return {
          player1: state.player1,
          player2: state.player2,
          player3: createPlayerWithHasPlayedQuestion(state.player3, true),
      };
    case score.ActionTypes.SCORE_PLAYER_PLAYED_ROUND:
      if (state.player1.name === action.payload.player.name) {
        return {
          player1: createPlayerWithHasPlayedRound(state.player1, true),
          player2: state.player2,
          player3: state.player3
        };
      } else if (state.player2.name === action.payload.player.name) {
        return {
          player1: state.player1,
          player2: createPlayerWithHasPlayedRound(state.player2, true),
          player3: state.player3
        };
      }
      return {
          player1: state.player1,
          player2: state.player2,
          player3: createPlayerWithHasPlayedRound(state.player3, true),
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
      hasPlayedQuestion: player.hasPlayedQuestion,
      isSelected: player.isSelected,
      score: player.score + scoreToAdd,
      hasPlayedRound: player.hasPlayedRound
    };
  }

  function createPlayerWithHasPlayedQuestion(player: IPlayerState, hasPlayedQuestion: boolean): IPlayerState {
    return {
      name: player.name,
      hasPlayedQuestion: hasPlayedQuestion,
      isSelected: player.isSelected,
      score: player.score,
      hasPlayedRound: player.hasPlayedRound
    };
  }

  function createPlayerWithHasPlayedRound(player: IPlayerState, hasPlayedRound: boolean): IPlayerState {
    return {
      name: player.name,
      hasPlayedQuestion: player.hasPlayedQuestion,
      isSelected: player.isSelected,
      score: player.score,
      hasPlayedRound: hasPlayedRound
    };
  }

  function createPlayerWithIsSelected(player: IPlayerState, isSelected: boolean): IPlayerState {
    return {
      name: player.name,
      hasPlayedQuestion: player.hasPlayedQuestion,
      isSelected: isSelected,
      score: player.score,
      hasPlayedRound: player.hasPlayedRound
    };
  }
};
