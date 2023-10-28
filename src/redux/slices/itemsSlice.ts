import { createSlice } from "@reduxjs/toolkit";
import { Vehicles } from "../../types/types";

const initialState = {
  data: [],
  isFiltered: false,
  filteredData: [],
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
      filterByNation(state, action) {
        state.isFiltered = true;
        state.filteredData = state.filteredData.filter(
          (item) => item.nation.title === action.payload
        );
      },
      filterByType(state, action) {
        state.isFiltered = true;
        state.filteredData = state.filteredData.filter(
          (item) => item.type.title === action.payload
        );
      },
      filterByLvl(state, action) {
        state.isFiltered = true;
        state.filteredData = state.filteredData.filter(
          (item) => item.level === +action.payload
        );
      },
      addItems(state, action) {
        state.data = action.payload;
        state.isFiltered = false;
        state.filteredData = state.data;
      },
      resetFilter(state) {
        state.isFiltered = false;
        state.filteredData = state.data;
      },
    },
  });
  

export const { addItems, filterByNation, filterByLvl, filterByType, resetFilter } =
  itemsSlice.actions;

export default itemsSlice.reducer;
