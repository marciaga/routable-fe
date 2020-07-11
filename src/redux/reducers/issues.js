import { createReducer } from '@reduxjs/toolkit';

import { issues } from '../actionTypes';

const initialState = {};

export const issuesReducer = createReducer(initialState, {
  [issues.ADD_ISSUES]: (state, action) => {
    const repoId = Object.keys(action.payload)[0];
    const values = Object.values(action.payload)[0];

    state[repoId] = values;
  },
});
