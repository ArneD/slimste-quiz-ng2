import { IPuzzle, NavigationType } from './../../core/models';
import { INavigationState } from './../../core/states';
import * as navigation from '../actions/navigation-state';

let initialState: INavigationState = {
  navigationType: NavigationType.Unknown
};

export function navigationStateReducer(state: INavigationState = initialState, action: navigation.Actions): INavigationState {
  switch (action.type) {
    case navigation.ActionTypes.NAVIGATION_NAVIGATE_TO:
      return {
        navigationType: action.payload.page
      };
    default:
      return state;
  }
};
