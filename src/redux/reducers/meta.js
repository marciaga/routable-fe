import { createReducer } from '@reduxjs/toolkit';

import { meta } from '../actionTypes';

const initialState = {};

/*
  // "mutate" an array by calling push()
  state.push(action.payload)
  // "mutate" the object by overwriting a field
  const todo = state[action.payload.index]
  todo.completed = !todo.completed
  // Can still return an immutably-updated value if we want to
  return state.filter((todo, i) => i !== action.payload.index)
*/
export const metaReducer = createReducer(initialState, {
  [meta.ADD_USER_DATA]: (state, action) => {
    const { textInputUsername, textInputApiKey } = action.payload; 

    state.apiKey = textInputApiKey;
    state.username = textInputUsername;
  },
});
