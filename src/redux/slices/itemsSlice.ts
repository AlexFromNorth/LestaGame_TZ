import { createSlice } from "@reduxjs/toolkit";
import { Vehicles } from "../../types/types";

const initialState = {
  data: [],
  isFiltered: [false, false, false],
  filteredData: [],
  filter: {
    nation: "",
    type: "",
    lvl: 0,
  },
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {

    filterByNation(state, action) {
      state.filter.nation = action.payload;
    },
    filterByType(state, action) {
      state.filter.type = action.payload;
    },
    filterByLvl(state, action) {
      state.filter.lvl = +action.payload;
    },
    filterVehicles(state) {
        let filteredData = state.data;
      
        if (state.filter.nation.length > 0) {
          filteredData = filteredData.filter((item) => item.nation.title === state.filter.nation);
        }
      
        if (state.filter.type.length > 0) {
          filteredData = filteredData.filter((item) => item.type.title === state.filter.type);
        }
      
        if (state.filter.lvl > 0) {
          filteredData = filteredData.filter((item) => item.level === state.filter.lvl);
        }
      
        state.filteredData = filteredData;
      },
    addItems(state, action) {
      state.data = action.payload;
      state.isFiltered = [false, false, false];
      state.filteredData = state.data;
    },
    resetFilter(state) {
      state.isFiltered = [false, false, false];
      state.filteredData = state.data;
    },
  },
});

export const {
  addItems,
  filterByNation,
  filterByLvl,
  filterByType,
  resetFilter,
  filterVehicles,
} = itemsSlice.actions;

export default itemsSlice.reducer;
