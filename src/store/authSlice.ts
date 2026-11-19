import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type User = {
  id: number;
  name: string;
  email: string;
  image?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    LogOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, LogOut } = authSlice.actions;

export default authSlice.reducer;

export const getCurrentUser = (state: RootState) => state.auth.user;
export const getCurrentRoken = (state: RootState) => state.auth.token;
