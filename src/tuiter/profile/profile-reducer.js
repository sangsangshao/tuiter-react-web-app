import {createSlice} from "@reduxjs/toolkit";

const initialProfile =
    {
      firstName: 'Sangsang',
      lastName: 'Shao',
      handle: 'sangsangshao',
      profilePicture: '../../../images/judy.jpeg',
      bannerPicture: '../../../images/banner.jpeg',
      bio: 'NEU Student',
      location: 'Seattle, WA',
      dateOfBirth: '1/1/2000',
      dateJoined: '4/8/2022',
      followingCount: 340,
      followersCount: 223,
      tweetsCount: 330
    };

    const profileSlice = createSlice({
    name: 'profile',
        initialState: initialProfile,
        reducers: {
      saveProfile(state, action) {
        return {...action.payload};
      }
    }
  });

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;