import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for the web
import authReducer from "./authSlice";

const presistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const presistReducer = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
  reducer: presistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.DEV,
});
export const presistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
