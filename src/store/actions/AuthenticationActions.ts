import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/const";
import { ICandidateUser, IUser } from "../../types";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (user: ICandidateUser, thunkApi) => {
    try {
      const response = await axios.post<IUser>(`${API}/auth/sign_in`, user);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (user: ICandidateUser, thunkApi) => {
    try {
      const response = await axios.post<IUser>(`${API}/auth/sign_up`, user);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data.message);
      }
    }
  }
);
