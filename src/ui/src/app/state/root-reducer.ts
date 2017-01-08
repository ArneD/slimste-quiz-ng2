import {combineReducers} from '@ngrx/store';
import { quizStateReducer, scoreStateReducer } from './reducers';

let stateReducers = combineReducers({
  scoreState: scoreStateReducer,
  quizState: quizStateReducer,
});

export function rootReducer(state: any, action: any) {
  return stateReducers(state, action);
}
