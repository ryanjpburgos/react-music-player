import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SpinnerState {
	isOpen: boolean;
}

const initialState: SpinnerState = {
	isOpen: false,
};

export const spinnerSlice = createSlice({
	name: "spinner",
	initialState,
	reducers: {
		open: (state) => {
			state.isOpen = true;
		},
		close: (state) => {
			state.isOpen = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { open, close } = spinnerSlice.actions;

export const selectSpinner = (state: RootState) => state.spinner.isOpen;

export default spinnerSlice.reducer;
