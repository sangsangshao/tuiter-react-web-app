import React from "react";
import "./home.css"
import PostList from "../post-list/index.js";
import PostSummaryList from "../post-summary-list/index.js";
import NavigationSidebar from "../navigation-sidebar/index.js";

import TuitList from "../tuits/TuitsList.js";
import WhatsHappening from "../home/whats-happening.js";
import TuitListItem from "../tuits/TuitItem.js";
import WhoToFollowListItem from "../who-to-follow-list/index.js";


const HomeScreen = () => {
  return (
      <div className="row mt-2 mb-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="home"/>
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          {/*<PostList/>*/}
          <h5>Home</h5>
          <WhatsHappening/>
          <TuitList/>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          {/*<PostSummaryList/>*/}
          <WhoToFollowListItem/>
        </div>
      </div>
  );
}

export default HomeScreen;