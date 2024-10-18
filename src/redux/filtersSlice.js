import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
<<<<<<< HEAD
    changeFilter: (state, action) => {
=======
  changeFilter: (state, action) => {
>>>>>>> e31870f6929ab4e99709e56422e39b9b09032887
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
