import { configureStore } from '@reduxjs/toolkit'
import * as Reducers from './reducers';

const store = configureStore({
  reducer: {
    meta: Reducers.metaReducer,
  },
});

export default store;
