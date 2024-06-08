import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRoomInfo } from "../apis/getRoomInfo";
import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomInfo: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRoomInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRoomInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roomInfo = action.payload;
      })
      .addCase(getRoomInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const roomInfo= (state) => state.room.roomInfo;
export const getRoomInfo = createAsyncThunk("room/getRoomInfo", async (id) => {
  try {
    const response = await fetchRoomInfo(id);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export default roomSlice.reducer;
