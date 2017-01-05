import { IScoreState, IPlayerState } from './../../core/states';
import { playerStateReducer } from './player-state.reducer';
import { UpdateScoreTick, UpdateAddSeconds } from '../actions/player-state';

let deepfreeze = require('deep-freeze');

describe('reduce scores', () => {
  describe('case SCORES_UPDATE_TICK', () => {
    it('returns a new instance with score minus 1', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 60
      };

      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateScoreTick());

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(59);
    });

    it('returns a new instance with score 0', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 0
      };

      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateScoreTick());

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(0);
    });
  });

   describe('case SCORES_UPDATE_ADD_SECONDS', () => {
    it('returns a new instance with the added expected score', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 60
      };
      let expectedScore = 80;
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateAddSeconds(20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(expectedScore);
    });

    it('returns a new instance with the subtracted expected score', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 60
      };
      let expectedScore = 40;
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateAddSeconds(-20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(expectedScore);
    });

    it('returns a new instance with the score 0', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 10
      };
      let expectedScore = 0;
      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateAddSeconds(-20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(expectedScore);
    });
  });
});
