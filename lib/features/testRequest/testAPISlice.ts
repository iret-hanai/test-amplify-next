import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTestApi } from "./testAPI";
import axios from 'axios';

export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}


export type ResponseTestData = {
  body: undefined;
  status: string;
};

const initialState: ResponseTestData = {
  body: undefined,
  status: "",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const testAPISlice = createAppSlice({
  name: "testAPI",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    getApiTest: create.asyncThunk(
      async () => {
        const response = await fetchTestApi();
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.body = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectBody: (testAPI) => testAPI.body,
    selectStatus: (testAPI) => testAPI.status,
  },
});

// Action creators are generated for each case reducer function.
export const { getApiTest } = testAPISlice.actions;

export const { selectBody, selectStatus } = testAPISlice.selectors;
