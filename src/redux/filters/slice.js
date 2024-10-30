// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });
// export const filterReducer = slice.reducer;
// export const { changeFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filters.name;
// export const filtersReducer = filtersSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;

export const { changeFilter } = slice.actions;
