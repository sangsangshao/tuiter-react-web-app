import React from "react";
import "./home.css"
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";
import NavigationSidebar from "../navigation-sidebar";


const HomeScreen = () => {
  return (
      <div className="row mt-2 mb-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={"home"} />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <PostList/>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <PostSummaryList/>
        </div>
      </div>
  );
}

export default HomeScreen;