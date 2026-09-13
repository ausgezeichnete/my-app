import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { LogOut } from "lucide-react";

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

// export const getCurrentUser = (state: Rootstate) => state.auth.user
// export const getCurrentRoken = (state: Rootstate) => state.auth.token
