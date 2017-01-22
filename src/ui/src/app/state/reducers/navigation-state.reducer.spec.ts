import { INavigationState } from './../../core/states';
import { NavigationType } from './../../core/models';
import { navigationStateReducer } from './navigation-state.reducer';
import { NavigateTo } from '../actions/navigation-state';

let deepfreeze = require('deep-freeze');

describe('reduce navigation state', () => {
  let initialState: INavigationState;

  beforeEach(() => {
    initialState = {
        navigationType: NavigationType.Unknown
      };
  });

  describe('case NAVIGATION_NAVIGATE_TO', () => {
    it('returns a new instance with expected navigation type', () => {
      let expectedNavigationType = NavigationType.ThreeSixNine;

      deepfreeze(initialState);

      let changedState: INavigationState = navigationStateReducer(initialState, new NavigateTo(expectedNavigationType));

      expect(changedState).not.toBe(initialState);
      expect(changedState.navigationType).toBe(expectedNavigationType);
    });
  });
});
