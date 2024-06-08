import { combineReducers } from "redux";
import roomSlice from "./qrInfo";

const combinedReducer = combineReducers({
  room: roomSlice,
});
export default combinedReducer;
