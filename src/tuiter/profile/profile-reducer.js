import {createSlice} from "@reduxjs/toolkit";

const profileData =
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
    }

// const profileSlice = createSlice({
//   name: 'profile',
//   initialState: profileData,
//   reducers: {
//     saveProfile(state, action) {
//       return{...action.payload};
//       }
//     }
// });
//
// export const {saveProfile} = profileSlice.actions;
// export default profileSlice.reducer;
const profile = (state = profileData, action) => {
  switch (action.type){
    case 'save-profile':
      const newProfileData = {
        firstName: action.profile.firstName,
        lastName: action.profile.lastName,
        handle: 'sangsangshao',
        profilePicture: '../../../images/Judy.jpeg', 	bannerPicture: '../../../images/banner.jpeg',
        bio: action.profile.bio,
        location: action.profile.location,
        dateOfBirth: action.profile.dateOfBirth,
        dateJoined: '4/8/2022',
        followingCount: 340,	followersCount: 320, tweetsCount: 330,
      }
      return newProfileData
    default:
      return state;
  }

}

export default profile;