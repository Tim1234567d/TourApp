// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // import movieApi from "../../common/apis/movieApi";
// // import { APIKey } from "../../common/apis/MovieApiKey";

// export const fetchAsyncTopPlaces = createAsyncThunk(
//   "topPlaces/fetchAsyncTopPlaces",
//   async () => {
    
//     const response = await axios
//     .get("http://localhost:3001/topPlaces");

//     return response.data;
//   }
// );

// export const fetchAsyncChooseUs = createAsyncThunk(
//   "chooseUs/fetchAsyncChooseUs",
//   async () => {
    
//     const response = await axios .get(
//         "http://localhost:3001/chooseUs");

//     return response.data;
//   }
// );

// export const fetchAsyncTopPlacesDetail = createAsyncThunk(
//   "topPlaces/fetchAsyncTopPlacesDetail",
//   async (id) => {
//     const response = await axios.get(`http://localhost:3001/topPlaces/${id}`);
//     return response.data;
//   }
// );

// const initialState = {
//   topPlaces: {},
//   selectTopPlaces: {},
//   chooseUs:{}
// };

// const mainPageSlice = createSlice({
//   name: "mainPage",
//   initialState,
//   reducers: {
//     removeSelectedTopPlace: (state) => {
//       state.selectTopPlaces = {};
//     },
//   },
//   extraReducers: {
//     [fetchAsyncTopPlaces.pending]: () => {
//       console.log("Pending");
//     },
//     [fetchAsyncTopPlaces.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, topPlaces: payload };
//     },
//     [fetchAsyncTopPlaces.rejected]: () => {
//       console.log("Rejected!");
//     },
//     [fetchAsyncChooseUs.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, chooseUs: payload };
//     },
//     [fetchAsyncTopPlacesDetail.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, selectTopPlaces: payload };
//     },
//   },
// });

// export const { removeSelectedTopPlace } = mainPageSlice.actions;
// export const getAllTopPlaces = (state) => state.mainPage.topPlaces;
// export const getAllChooseUs = (state) => state.mainPage.chooseUs;
// export const getSelectedTopPlace = (state) => state.mainPage.getSelectedTopPlace;
// export default mainPageSlice.reducer;