import {
  ScoreIncreaseSelectedPlayer,
  ScoreResetHasPlayed,
  ScorePlayerPlayed,
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
  }

  describe('case SCORE_UPDATE_PLAYERS', () => {
    it('returns a new instance with expected players', () => {
      let expectedPlayer1: IPlayerState = {
        name: 'First player',
        score: 70,
        isSelected: true,
        hasPlayed: true
      };

      let expectedPlayer2: IPlayerState = {
        name: 'Foo bar player',
        score: 90,
        isSelected: false,
        hasPlayed: false
      };

      let expectedPlayer3: IPlayerState = {
        name: 'Winner',
        score: 100,
        isSelected: false,
        hasPlayed: true
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
        hasPlayed: initialState.player1.hasPlayed
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
        hasPlayed: initialState.player2.hasPlayed
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
        hasPlayed: initialState.player3.hasPlayed
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

  describe('case SCORE_RESET_HAS_PLAYED', () => {
    it('returns a new instance with players has played is false', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayed = true;
      state.player2.hasPlayed = true;
      state.player3.hasPlayed = true;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScoreResetHasPlayed());

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayed).toBeFalsy();
      expect(changedState.player2.hasPlayed).toBeFalsy();
      expect(changedState.player3.hasPlayed).toBeFalsy();
    });
  });

  describe('case SCORE_PLAYER_PLAYED', () => {
    it('returns a new instance with expected player 1 has played is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player1.hasPlayed = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayed(state.player1));

      expect(changedState).not.toBe(state);
      expect(changedState.player1.hasPlayed).toBeTruthy();
    });

    it('returns a new instance with expected player 2 has played is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player2.hasPlayed = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayed(state.player2));

      expect(changedState).not.toBe(state);
      expect(changedState.player2.hasPlayed).toBeTruthy();
    });

    it('returns a new instance with expected player 3 has played is true', () => {
      let state: IScoreState = Object.assign({}, initialState);
      state.player3.hasPlayed = false;

      deepfreeze(state);

      let changedState: IScoreState = scoreStateReducer(state,
          new ScorePlayerPlayed(state.player3));

      expect(changedState).not.toBe(state);
      expect(changedState.player3.hasPlayed).toBeTruthy();
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
    expect(player.hasPlayed).toBe(expectedPlayer.hasPlayed);
  }
});
