import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany, IGetCompaniesResponse } from "../../types";
import { getCompanies } from "../actions";

interface IInitialState {
  companies: ICompany[] | null;
  companiesCount: number;
  loading: boolean;
  error: string;
}

const initialState: IInitialState = {
  companies: null,
  companiesCount: 0,
  loading: false,
  error: "",
};
export const CompaniesSlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: {
    [getCompanies.pending.type]: (state) => {
      state.loading = true;
    },
    [getCompanies.fulfilled.type]: (
      state,
      action: PayloadAction<IGetCompaniesResponse>
    ) => {
      state.loading = false;
      state.error = "";
      state.companies = action.payload.items;
      state.companiesCount = action.payload.meta.totalItems;
    },
    [getCompanies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
