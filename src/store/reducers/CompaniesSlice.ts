import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany, IGetCompaniesResponse } from "../../types";
import { getCompanies, getCompany } from "../actions";

interface IInitialState {
  companies: ICompany[] | null;
  companiesCount: number;
  company: ICompany | null;
  loading: boolean;
  error: string;
}

const initialState: IInitialState = {
  companies: null,
  companiesCount: 0,
  company: null,
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

    [getCompany.pending.type]: (state) => {
      state.loading = true;
    },
    [getCompany.fulfilled.type]: (state, action: PayloadAction<ICompany>) => {
      state.loading = false;
      state.error = "";
      state.company = action.payload;
    },
    [getCompany.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
