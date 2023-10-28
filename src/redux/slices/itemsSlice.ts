// itemsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { Vehicles } from "../../types/types";

const initialState = {
  data: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    filterByNation(state, action) {      
      state.data = state.data.filter(
        (item: Vehicles) => item.nation.title === action.payload
      );
    },
    addItems(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addItems, filterByNation } = itemsSlice.actions;

export default itemsSlice.reducer;
