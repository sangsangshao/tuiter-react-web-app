import {useDispatch, useSelector} from "react-redux";
import TuitStats from "../tuits/TuitStats";
import React from "react";
import {Link} from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dob = new Date(profile.dateOfBirth)
  const join = new Date(profile.dateJoined)

  return (
      <li className="list-group-item border">
        <table>
          <tbody>
          <tr>
            <div className="row">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-left"></i>
              </div>
              <div className="col-10 mt-2">
                <h5 className="text-black m-0">{profile.firstName + " " + profile.lastName}</h5>
                <div className="text-secondary">{ profile.tweetsCount} Tweets</div>
              </div>
            </div>

            <div className="row position-relative mt-2">
              <img style={{"width":"700px", "height":"200px"}} src={profile.bannerPicture} alt="banner"/>

              <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
                <img className="rounded-circle text-secondary border-5" style={{"width":"135px", "height":"135px"}} src={profile.profilePicture} alt="profile"/>

                <Link to="/tuiter/edit-profile" className="btn border-secondary rounded-pill align-self-end fw-bolder">Edit Profile</Link>

              </div>
            </div>

            <div style={{marginTop: "70px"}}></div>
            <div className="mb-2 px-2 ms-2">
              <h5 className="m-0 fw-bolder">{profile.firstName + " " + profile.lastName}</h5>
              <div className="text-secondary">@{profile.handle}</div>

              <div className="mt-2 text-black">{profile.bio}</div>

              <div className="d-inline-block me-4 mt-2">
                <span><i className="bi bi-geo-alt text-secondary"></i></span>
                <span className="text-secondary px-1">{profile.location}</span>
              </div>
              <div className="d-inline-block me-4">
                <span><i className="bi bi-balloon text-secondary"></i></span>
                <span className="text-secondary px-1">Born {months[dob.getMonth()]} {dob.getDate()} {dob.getFullYear()}</span>
              </div>
              <div className="d-inline-block me-4">
                <span><i className="bi bi-calendar3 text-secondary"></i></span>
                <span className="text-secondary px-1">Joined {months[join.getMonth()]} {join.getFullYear()}</span>
              </div>

              <div className="row mt-2">
                <div className="col-3">
                  <span className="text-black fw-bolder">{profile.followingCount} </span> <span className="text-secondary">Following</span>
                </div>
                <div className="col-3">
                  <span className="text-black fw-bolder">{profile.followersCount} </span> <span className="text-secondary">Followers</span>
                </div>
              </div>

            </div>
          </tr>
          </tbody>
        </table>
      </li>
  )
  }

export default Profile;