import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer
});

export { rootReducer };
