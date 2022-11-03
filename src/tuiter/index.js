import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import {Routes, Route} from "react-router";
import ExploreComponent from "./explore/explore-component.js";
import PostList from "./post-list";
import PostSummaryList from "./post-summary-list";
import {Navigate} from 'react-router-dom';
import HomeScreen from "./home/home-screen.js";
import ExploreScreen from "./explore/explore-screen.js";
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./tuits/tuits-reducer.js";
import profileReducer from "./profile/profile-reducer.js";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile/profile-component.js";
import EditProfileComponent from "./edit-profile/index.js";


const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

function Tuiter() {
  return (
      // <div className="row mt-2">
      //   <div className="col-2 col-md-2 col-lg-1 col-xl-2">
      //     <NavigationSidebar active="explore"/>
      //   </div>
      //
      //   <div className="col-10 col-md-10 col-lg-7 col-xl-6"
      //        style={{"position": "relative"}}>
      //     {/*<ExploreComponent/>*/}
      //     <Routes>
      //       <Route path="/" element={<Navigate to="home"/>}/>
      //       <Route path="home"    element={<PostList/>}/>
      //       <Route path="explore" element={<ExploreComponent/>}/>
      //     </Routes>
      //   </div>
      //   <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      //     {/*<WhoToFollowList/>*/}
      //     <Routes>
      //       <Route path="home"    element={<PostSummaryList/>}/>
      //       <Route path="explore" element={<WhoToFollowList/>}/>
      //     </Routes>
      //   </div>
      // </div>
      <Provider store={store}>
      <div>
      <Routes>
        <Route index element={<HomeScreen/>}/>
        <Route path="/explore" element={<ExploreScreen/>}/>
        <Route path="/profile" element={<ProfileComponent/>}/>
        <Route path="/edit-profile" element={<EditProfileComponent/>}/>
      </Routes>
      </div>
      </Provider>
  )
}
export default Tuiter;