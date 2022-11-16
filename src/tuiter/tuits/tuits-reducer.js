import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const currentUser = {
  "userName": "NASA",
  "handle": "nasa",
  "logo-image": "../../../images/nasalogo.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Nasa",
  "time": "2h",
  "liked": false,
  "stats": {
    "comments": 0,
    "retuits": 0,
    "likes": 0
  }
}

const tuitsSlice = createSlice({
  name: 'tuits',
  // initialState: tuits,
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state) => {
          state.loading = false
        },

    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }
  },
  reducers: {
    likeTuit(state, action) {
        const index = state
        .findIndex(tuit =>
          tuit._id === action.payload);
        state[index].stats.liked = !state[index].stats.liked;
        state[index].stats.likes = state[index].stats.liked ? state[index].stats.likes + 1 : state[index].stats.likes - 1;
    },

    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
});

export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

