import {combineReducers} from '@ngrx/store';
import { quizStateReducer, scoreStateReducer, navigationStateReducer } from './reducers';

let stateReducers = combineReducers({
  scoreState: scoreStateReducer,
  quizState: quizStateReducer,
  navigationState: navigationStateReducer
});

export function rootReducer(state: any, action: any) {
  return stateReducers(state, action);
}
