import { createReducer } from '@reduxjs/toolkit';

import { issues } from '../actionTypes';

const initialState = {};

export const issuesReducer = createReducer(initialState, {
  [issues.ADD_ISSUES]: (state, action) => {
    // const { repoId, issues } = action.payload;
    // console.log('repoId: ', repoId);
    // console.log('issues: ', issues);
    // const prevIssues = state[repoId];
    // console.log('prevIssues: ', prevIssues);

    // if (!prevIssues) {
    //   // the key has no value, so assign the fetched issues
    //   state[repoId] = issues;
    //   return;
    // }

    // return state;
  },
});
