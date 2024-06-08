import { configureStore } from "@reduxjs/toolkit";
import combinedReducer from "./combinedReducer";

export default configureStore({
  reducer: combinedReducer,
});