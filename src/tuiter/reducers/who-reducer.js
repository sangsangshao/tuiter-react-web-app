// import { createSlice } from "@reduxjs/toolkit";
// import whoArray from "./who.json";
//
// const whoSlice = createSlice({
//   name: "who",
//   initialState: whoArray
// });
//
// export default whoSlice.reducer;

import whoJson from '../data/who.json'

const whoReducer = (state = whoJson) => {
  return (state);
};

export default whoReducer;