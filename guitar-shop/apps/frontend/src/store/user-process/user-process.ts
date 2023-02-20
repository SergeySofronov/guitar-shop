import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

const { setAuthorizationStatus } = userProcess.actions;

export { userProcess, setAuthorizationStatus };
