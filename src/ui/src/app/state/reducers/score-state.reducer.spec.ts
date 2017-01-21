import {
  ScoreIncreaseSelectedPlayer,
  ScoreResetHasPlayedQuestion,
  ScoreResetHasPlayedRound,
  ScorePlayerPlayedQuestion,
  ScorePlayerPlayedRound,
  ScoreSelectPlayer,
  ScoreUpdatePlayers
} from './../actions/score-state';
import { IScoreState, IPlayerState } from './../../core/states';
import { scoreStateReducer } from './score-state.reducer';

let deepfreeze = require('deep-freeze');

describe('reduce score state', () => {
  let initialState: IScoreState;

  beforeEach(() => {
    initialState = createInitialState();
  });

  function createInitialState(): IScoreState {
    return {
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
  }

  describe('case SCORE_UPDATE_PLAYERS', () => {
    it('returns a new instance with expected players', () => {
      let expectedPlayer1: IPlayerState = {
        name: 'First player',
        score: 70,
        isSelected: true,
        hasPlayedQuestion: true,
        hasPlayedRound: false,
      };

      let expectedPlayer2: IPlayerState = {
        name: 'Foo bar player',
        score: 90,
        isSelected: false,
        hasPlayedQuestion: false,
        hasPlayedRound: false
      };

      let expectedPlayer3: IPlayerState = {
        name: 'Winner',
        score: 100,
        isSelected: false,
        hasPlayedQuestion: true,
        hasPlayedRound: false,
      };

      deepfreeze(initialState);

      let changedState: IScoreState = scoreStateReducer(initialState,
          new ScoreUpdatePlayers(expectedPlayer1, expectedPlayer2, expectedPlayer3));

      expect(changedState).not.toBe(initialState);
      expectPlayer(expectedPlayer1, changedState.player1);
      expectPlayer(expectedPlayer2, changedState.player2);
      expectPlayer(expectedPlayer3, changedState.player3);
    });
  });

  describe('case SCORE_INCREASE_SELECTED_PLAYER', () => {
    it('returns a new instance with player 1 score increased', () => {
      let expectedPlayer1: IPlayerState = {
        name: initialState.player1.name,
        score: 70,
        isSelected: initialState.player1.isSelected,
        hasPlayedQuestion: initialState.player1.hasPlayedQuestion,
        hasPlayedRound: initialState.player1.hasPlayedRound
      };

      deepfreeze(initialState);

      let changedState: IScoreState = scoreStateReducer(initialState,
          new ScoreIncreaseSelectedPlayer(10));

      expect(changedState).not.toBe(initialState);
      expectPlayer(expectedPlayer1, changedState.player1);
      expectPlayer(initialState.player2, changedState.player2);
      expectPlayer(initialState.player3, changedState.player3);
    });

    it('returns a new instance with player 2 score increased', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.isSelected = false;
      state.player2.isSelected = true;

      let expectedPlayer2: IPlayerState = {
        name: initialState.player2.name,
        score: 70,
        isSelected: initialState.player2.isSelected,
        hasPlayedQuestion: initialState.player2.hasPlayedQuestion,
        hasPlayedRound: initialState.player2.hasPlayedRound
      };

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreIncreaseSelectedPlayer(10));

      expect(changedState).not.toBe(state);
      expectPlayer(state.player1, changedState.player1);
      expectPlayer(expectedPlayer2, changedState.player2);
      expectPlayer(state.player3, changedState.player3);
    });

    it('returns a new instance with player 3 score increased', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.isSelected = false;
      state.player3.isSelected = true;

      let expectedPlayer3: IPlayerState = {
        name: initialState.player3.name,
        score: 70,
        isSelected: initialState.player3.isSelected,
        hasPlayedQuestion: initialState.player3.hasPlayedQuestion,
        hasPlayedRound: initialState.player3.hasPlayedRound
      };

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreIncreaseSelectedPlayer(10));

      expect(changedState).not.toBe(state);
      expectPlayer(state.player1, changedState.player1);
      expectPlayer(state.player2, changedState.player2);
      expectPlayer(expectedPlayer3, changedState.player3);
    });
  });

  describe('case SCORE_RESET_HAS_PLAYED_ROUND', () => {
    it('returns a new instance with players has played round is false', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayedRound = true;
      state.player2.hasPlayedRound = true;
      state.player3.hasPlayedRound = true;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreResetHasPlayedRound());

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayedRound).toBeFalsy();
      expect(changedState.player2.hasPlayedRound).toBeFalsy();
      expect(changedState.player3.hasPlayedRound).toBeFalsy();
    });
  });

   describe('case SCORE_RESET_HAS_PLAYED_QUESTION', () => {
    it('returns a new instance with players has played question is false', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayedQuestion = true;
      state.player2.hasPlayedQuestion = true;
      state.player3.hasPlayedQuestion = true;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreResetHasPlayedQuestion());

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayedQuestion).toBeFalsy();
      expect(changedState.player2.hasPlayedQuestion).toBeFalsy();
      expect(changedState.player3.hasPlayedQuestion).toBeFalsy();
    });
  });


  describe('case SCORE_PLAYER_PLAYED_QUESTION', () => {
    it('returns a new instance with expected player 1 has played question is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayedQuestion = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedQuestion(state.player1));

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayedQuestion).toBeTruthy();
    });

    it('returns a new instance with expected player 2 has played question is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player2.hasPlayedQuestion = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedQuestion(state.player2));

      expect(changedState).not.toBe(state);
      expect(changedState.player2.hasPlayedQuestion).toBeTruthy();
    });

    it('returns a new instance with expected player 3 has played question is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player3.hasPlayedQuestion = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedQuestion(state.player3));

      expect(changedState).not.toBe(state);
      expect(changedState.player3.hasPlayedQuestion).toBeTruthy();
    });
  });

  describe('case SCORE_PLAYER_PLAYED_ROUND', () => {
    it('returns a new instance with expected player 1 has played round is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayedRound = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedRound(state.player1));

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayedRound).toBeTruthy();
    });

    it('returns a new instance with expected player 2 has played round is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player2.hasPlayedRound = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedRound(state.player2));

      expect(changedState).not.toBe(state);
      expect(changedState.player2.hasPlayedRound).toBeTruthy();
    });

    it('returns a new instance with expected player 3 has played round is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player3.hasPlayedRound = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayedRound(state.player3));

      expect(changedState).not.toBe(state);
      expect(changedState.player3.hasPlayedRound).toBeTruthy();
    });
  });

  describe('case SCORE_SELECT_PLAYER', () => {
    it('returns a new instance with expected player 1 is selected is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.isSelected = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreSelectPlayer(state.player1));

      expect(changedState).not.toBe(state);
      expect(changedState.player1.isSelected).toBeTruthy();
      expect(changedState.player2.isSelected).toBeFalsy();
      expect(changedState.player3.isSelected).toBeFalsy();
    });

    it('returns a new instance with expected player 2 is selected is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player2.isSelected = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreSelectPlayer(state.player2));

      expect(changedState).not.toBe(state);
      expect(changedState.player2.isSelected).toBeTruthy();
      expect(changedState.player1.isSelected).toBeFalsy();
      expect(changedState.player3.isSelected).toBeFalsy();
    });

    it('returns a new instance with expected player 3 is selected is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player3.isSelected = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreSelectPlayer(state.player3));

      expect(changedState).not.toBe(state);
      expect(changedState.player3.isSelected).toBeTruthy();
      expect(changedState.player2.isSelected).toBeFalsy();
      expect(changedState.player1.isSelected).toBeFalsy();
    });
  });

  function expectPlayer(expectedPlayer: IPlayerState, player: IPlayerState) {
    expect(player.name).toBe(expectedPlayer.name);
    expect(player.score).toBe(expectedPlayer.score);
    expect(player.isSelected).toBe(expectedPlayer.isSelected);
    expect(player.hasPlayedQuestion).toBe(expectedPlayer.hasPlayedQuestion);
  }
});
