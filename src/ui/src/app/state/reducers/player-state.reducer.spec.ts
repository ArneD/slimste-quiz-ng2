import { IScoreState, IPlayerState } from './../../core/states';
import { playerStateReducer } from './player-state.reducer';
import { PlayerUpdateScoreTick, PlayerUpdateAddSeconds } from '../actions/player-state';

let deepfreeze = require('deep-freeze');

describe('reduce player state', () => {
  let initialState: IPlayerState = {
    name: '',
    score: 0,
    isSelected: false,
    hasPlayed: false
  };

  beforeEach(() => {
    initialState = {
        name: 'test',
        score: 60,
        isSelected: false,
        hasPlayed: false
      };
  });

  describe('case PLAYER_SCORE_UPDATE_TICK', () => {
    it('returns a new instance with score minus 1', () => {
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new PlayerUpdateScoreTick());

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(59);
    });

    it('returns a new instance with score 0', () => {
      let state: IPlayerState = Object.assign({}, initialState);
      state.score = 0;

      deepfreeze(state);

      let changedState: IPlayerState = playerStateReducer(state, new PlayerUpdateScoreTick());

      expect(changedState).not.toBe(state);
      expect(changedState.name).toBe(state.name);
      expect(changedState.score).toBe(0);
    });
  });

   describe('case PLAYER_SCORE_UPDATE_ADD_SECONDS', () => {
    it('returns a new instance with the added expected score', () => {
      let expectedScore = 80;
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new PlayerUpdateAddSeconds(20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(expectedScore);
    });

    it('returns a new instance with the subtracted expected score', () => {

      let expectedScore = 40;
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new PlayerUpdateAddSeconds(-20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(expectedScore);
    });

    it('returns a new instance with the score 0', () => {
      let state: IPlayerState = Object.assign({}, initialState);
      state.score = 10;

      let expectedScore = 0;
      deepfreeze(state);

      let changedState: IPlayerState = playerStateReducer(state, new PlayerUpdateAddSeconds(-20));

      expect(changedState).not.toBe(state);
      expect(changedState.name).toBe(state.name);
      expect(changedState.score).toBe(expectedScore);
    });
  });
});
