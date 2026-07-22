import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentStudent } from '../../data/mockData';
import { Student } from '../../types/domain';

type AuthState = {
  user: Student | null;
  token: string | null;
  onboardingComplete: boolean;
};

const initialState: AuthState = {
  user: currentStudent,
  token: 'demo-token',
  onboardingComplete: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: Student; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.onboardingComplete = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
