/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
  name: "user",
  initialState: {

  },
  reducers: {
    // setCarDataBooking: (state, action) => {
    //   state.carDataBooking = action.payload;
    // },
  },
  extraReducers: {},
});


export const { } = userSlice.actions;

const { reducer: userReducer } = userSlice;

export default userReducer;
