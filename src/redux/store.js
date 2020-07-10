import { configureStore } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle';

import * as Reducers from './reducers';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = loadState();
const reducer = {
  issues: Reducers.issuesReducer,
  meta: Reducers.metaReducer,
  repos: Reducers.reposReducer,
};

const store = configureStore({
  preloadedState,
  reducer,
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000); // ensure saveState is invoked at most 1/sec

export default store;
