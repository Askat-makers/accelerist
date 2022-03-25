import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { IUser } from "../../types";
import { signIn, signUp } from "../actions/AuthenticationActions";

interface IInitialState {
  user: IUser | null;
  loading: boolean;
  error: string;
}

const initialState: IInitialState = {
  user: null,
  loading: false,
  error: "",
};

export const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signUp.pending.type]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },
    [signUp.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { logOut } = AuthenticationSlice.actions;
