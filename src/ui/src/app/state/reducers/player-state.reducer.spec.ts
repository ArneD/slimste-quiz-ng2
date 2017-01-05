import { IScoreState, IPlayerState } from './../../core/states';
import { playerStateReducer } from './player-state.reducer';
import { UpdateScoreTick, UpdateAddSeconds } from '../actions/player-state';

let deepfreeze = require('deep-freeze');

describe('reduce scores', () => {
  describe('case SCORES_UPDATE_TICK', () => {
    it('should return a new instance with the correct state', () => {
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
  });

   describe('case SCORES_UPDATE_ADD_SECONDS', () => {
    it('should return a new instance with the correct state', () => {
      let initialState: IPlayerState = {
          name: 'test',
          score: 60
      };

      deepfreeze(initialState);

      let changedState: IPlayerState = playerStateReducer(initialState, new UpdateAddSeconds(20));

      expect(changedState).not.toBe(initialState);
      expect(changedState.name).toBe(initialState.name);
      expect(changedState.score).toBe(80);
    });
  });
});
