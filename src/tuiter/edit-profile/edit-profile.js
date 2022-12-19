import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../profile/profile-reducer";

const EditProfile = () => {
  const initialProfile = useSelector(state => state.profile);
  const [curProfile, setCurProfile] = useState(initialProfile);
  const dispatch = useDispatch();

  const saveClickHandler = () => {
    dispatch(saveProfile(curProfile));
  }

  return (
      <li className="list-group-item border">
        <div>
            <div className="row d-flex align-items-center">
              <div className="col-8 d-flex align-items-center ms-2">
                <Link to="/tuiter/profile"><i className="bi bi-x text-black"></i></Link>
                <h5 className="m-3" >Edit profile</h5>
              </div>
              <div className="col-2 ms-auto">
                <Link to="/tuiter/profile" className="btn rounded-pill btn-dark align-self-end" onClick={saveClickHandler}>Save</Link>
              </div>
            </div>
        </div>

        <div className="row mt-2 position-relative">
          <img width="100%" height="200px" src="../../../images/banner.jpeg" alt="banner"/>

          <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
            <img className="rounded-circle border-secondary border-5" width="134px"  height="134px" src="../../../images/Judy.jpeg" alt="profile"/>
          </div>
        </div>

        <div style={{marginTop: "80px"}}></div>
        <div className="mb-2 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-firstName">First Name</label>
            <input className="form-control border-0" id="edit-profile-firstName" type="text"
                   value={curProfile.firstName}
                   onChange={(e) => setCurProfile({...curProfile, firstName: e.target.value})}
                   placeholder="FirstName"/>
          </div>
        </div>

        <div className="mb-2 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-lastName">Last Name</label>
            <input className="form-control border-0" id="edit-profile-lastName" type="text"
                   value={curProfile.lastName}
                   onChange={(e) => setCurProfile({...curProfile, lastName: e.target.value})}
                   placeholder="LastName"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-bio">Bio</label>
            <input className="form-control border-0"
                   id="edit-profile-bio" type="text"
                   value={curProfile.bio}
                   onChange={(e) => setCurProfile({...curProfile, bio: e.target.value})}
                   placeholder="Bio"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary border-0"
                   htmlFor="edit-profile-location">Location</label>
            <input className="form-control border-0"
                   id="edit-profile-location" type="text"
                   value={curProfile.location}
                   onChange={(e) => setCurProfile({...curProfile, location: e.target.value})}
                   placeholder="Location"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <input className="ms-2 text-secondary border-0"
                   id="edit-profile-website" type="text"
                   value={curProfile.website}
                   onChange={(e) => setCurProfile({...curProfile, website: e.target.value})}
                   placeholder="Website"/>
          </div>
        </div>

        <div className="mt-4 mb-2 px-2">
          <div className="form-group border-0" style={{border: 'none'}}>
            <div className="py-1">
              <label className="ms-2 text-secondary"
                     htmlFor="edit-profile-name">Birth date &#183;</label>
              <span className="text-primary"> Edit</span>
            </div>
            <input className="form-control text-secondary p-2"
                   id="edit-profile-name" type="text"
                   // value={months[dob.getMonth()] + " " + dob.getDate() + ", " + dob.getFullYear()}
                   onChange={(e) => setCurProfile({...curProfile, dateOfBirth: e.target.value})}
                   placeholder="mm/dd/yyyy"/>
          </div>
        </div>

        <div>
          <div className="row d-flex align-items-center">
            <div className="col-8 d-flex align-items-center ms-2">
              <h5 className="mt-4 text-secondary" >Switch to professional</h5>
            </div>
            <div className="col-2 ms-auto mt-4">
              <Link to="/tuiter/profile"><i className="bi bi-chevron-right float-end me-2 text-secondary"></i></Link>
            </div>
          </div>
        </div>
      </li>
  )
}

export default EditProfile;