import { createReducer } from '@reduxjs/toolkit';

import { repos } from '../actionTypes';

const initialState = [];

export const reposReducer = createReducer(initialState, {
  [repos.ADD_REPOS]: (state, action) => {
    state.push(...action.payload);
  },
});
