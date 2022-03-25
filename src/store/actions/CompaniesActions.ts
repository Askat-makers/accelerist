import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API } from "../../helpers/const";
import { ICompany, IFilter, IGetCompaniesResponse } from "../../types";

const getAuthConfig = () => {
  let data = JSON.parse(localStorage.getItem("persist:root") || "null");
  let {
    user: { accessToken },
  } = JSON.parse(data.auth);
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const getCompanies = createAsyncThunk(
  "company/getCompanies",
  async (filter: IFilter, thunkApi) => {
    try {
      const config = getAuthConfig();
      const response = await axios.get<IGetCompaniesResponse>(
        `${API}/companies?page=${filter.page}&limit=12&q=${filter.q}&industries=${filter.industries}`,
        config
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data.message);
      }
    }
  }
);
