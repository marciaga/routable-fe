import { createAction } from '@reduxjs/toolkit';

import { issues } from '../actionTypes';

export const addIssues = createAction(issues.ADD_ISSUES);