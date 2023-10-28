// itemsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { CatalogState } from "../types/types";
import apiCatalog from "../api/api";
import { vehicles } from "../../api/api";

const initialState = {
  vehicles,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
    //   state.basket.push(action.payload);
    //   localStorage.setItem("basket", JSON.stringify(state.basket)); // Сохраняем корзину в localStorage
    },

  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;