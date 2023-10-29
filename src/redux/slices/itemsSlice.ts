import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { InitialState, VehicleItem } from "../../types/types";
 

const initialState:InitialState = {
  data: [],
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

    filterByNation(state, action:PayloadAction<string>) {
      state.filter.nation = action.payload;
    },
    filterByType(state, action:PayloadAction<string>) {
      state.filter.type = action.payload;
    },
    filterByLvl(state, action:PayloadAction<string>) {
      state.filter.lvl = +action.payload;
    },
    filterVehicles(state) {
        let filteredDatas = state.data;
      
        if (state.filter.nation.length > 0) {
          filteredDatas = filteredDatas.filter((item) => item.nation.title === state.filter.nation);
        }
      
        if (state.filter.type.length > 0) {
          filteredDatas = filteredDatas.filter((item) => item.type.title === state.filter.type);
        }
      
        if (state.filter.lvl > 0) {
          filteredDatas = filteredDatas.filter((item) => item.level === state.filter.lvl);
        }
      
        state.filteredData = filteredDatas;
      },
    addItems(state, action:PayloadAction<VehicleItem[]>) {
      state.data = action.payload;
      state.filteredData = state.data;
    },
    resetFilter(state) {
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
