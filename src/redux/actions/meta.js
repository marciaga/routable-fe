import { createAction } from '@reduxjs/toolkit';

import { meta } from '../actionTypes';

/*
  use: addApiKey({ text: 'Buy milk' }) the result is payload.text === 'Buy milk'
*/
export const addApiKey = createAction(meta.ADD_API_KEY);
