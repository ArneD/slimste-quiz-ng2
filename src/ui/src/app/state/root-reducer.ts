import {combineReducers} from '@ngrx/store';
import { playerStateReducer, scoreStateReducer } from './reducers';

let stateReducers = combineReducers({
  scoreState: scoreStateReducer
});

export function rootReducer(state: any, action: any) {
  return stateReducers(state, action);
}
