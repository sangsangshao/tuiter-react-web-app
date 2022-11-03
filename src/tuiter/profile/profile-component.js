import NavigationSidebar from "../navigation-sidebar/index.js";
import WhoToFollowList from "../who-to-follow-list/index.js";
import Profile from "./index.js";

const ProfileComponent = () => {
  return (
      <div className="row mt-3 mb-3">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={"profile"} />
        </div>
        <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6">
          <Profile/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
  );
}

export default ProfileComponent;