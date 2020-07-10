import { createAction } from '@reduxjs/toolkit';

import { repos } from '../actionTypes';

export const addRepos = createAction(repos.ADD_REPOS);