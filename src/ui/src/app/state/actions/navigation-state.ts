import { Action } from '@ngrx/store';
import { type } from '../util';
import { NavigationType } from '../../core/states';

export const ActionTypes = {
  NAVIGATION_NAVIGATE_TO: type('NAVIGATION_NAVIGATE_TO'),
};

export class NavigateTo implements Action {
  type = ActionTypes.NAVIGATION_NAVIGATE_TO;
  payload: { page: NavigationType };

  public constructor(page: NavigationType) {
    this.payload = { page: page };
  }
}

export type Actions = NavigateTo;
