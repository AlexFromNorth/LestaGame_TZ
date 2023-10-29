import { combineReducers } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";

export default combineReducers({
  main: itemsSlice,
});
