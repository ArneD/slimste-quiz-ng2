import {combineReducers} from '@ngrx/store';
import { playerStateReducer } from './reducers';

let stateReducers = combineReducers({
  playerState: playerStateReducer
});

export function rootReducer(state: any, action: any) {
  return stateReducers(state, action);
}
