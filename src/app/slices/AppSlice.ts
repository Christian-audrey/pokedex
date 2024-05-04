import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialialState } from "../../utils/Types";
import App from "../../App";


const initialState: AppTypeInitialialState = {};

export const AppSlice = createSlice({
    name:"app",
    initialState,
    reducers: {},
});

export const {} =AppSlice.actions;