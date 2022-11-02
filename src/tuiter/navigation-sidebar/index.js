import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return(
      <div>
        <div className="list-group">
          <Link to="/tuiter" className="list-group-item">
            <div className="row">
              <div className="col-2">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Link>

          <Link to="/tuiter" className={`list-group-item
        ${!active ? 'active' : ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-house-fill"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Home
              </div>
            </div>
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-hash"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Explore
              </div>
            </div>
          </Link>

          <a href="#" className={`list-group-item
        ${active === 'notifications' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-bell-fill"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Notifications
              </div>
            </div>
          </a>

          <a href="#" className={`list-group-item ${active === 'messages'? 'active': ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Messages
              </div>
            </div>
          </a>
          <a href="#" className={`list-group-item ${active === 'bookmarks'? 'active': ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-bookmark-fill"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Bookmarks
              </div>
            </div>
          </a>
          <a href="#" className={`list-group-item ${active === 'lists'? 'active': ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-list-ul"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Lists
              </div>
            </div>
          </a>
          <Link to="/tuiter/profile" className={`list-group-item
        ${active === 'profile' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-2">
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                Profile
              </div>
            </div>
          </Link>
          <a href="#" className={`list-group-item ${active === 'more'? 'active': ''}`}>
            <div className="row">
              <div className="col-2 wd-center">
                <i className="bi bi-three-dots"></i>
              </div>
              <div className="d-none d-xl-block col-10">
                More
              </div>
            </div>
          </a>
        </div>

        <div className="d-grid mt-2">
          <a href="#/" className="btn btn-primary btn-block rounded-pill">Tuiter</a>
        </div>
      </div>
  );
}
export default NavigationSidebar;