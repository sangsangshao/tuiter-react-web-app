import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  // const dob = new Date(profile.dateOfBirth)
  // const join = new Date(profile.dateJoined)
  // const [name, setName] = useState(profile.firstName + " " + profile.lastName);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

  const dispatch = useDispatch()
  const saveClickHandler = () => {
    dispatch({
      type: 'save-profile',
      profile: {
        // firstName: name.split(' ')[0],
        // lastName: name.split(' ')[1],
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: dateOfBirth,
      }
    })
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
                   value={firstName} onChange={(event) => setFirstName(event.target.value)}
                   placeholder="FirstName"/>
          </div>
        </div>

        <div className="mb-2 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-lastName">Last Name</label>
            <input className="form-control border-0" id="edit-profile-lastName" type="text"
                   value={lastName} onChange={(event) => setLastName(event.target.value)}
                   placeholder="LastName"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-bio">Bio</label>
            <input className="form-control border-0"
                   id="edit-profile-bio" type="text"
                   value={bio}
                   onChange={(event) => setBio(event.target.value)}
                   placeholder="Bio"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary border-0"
                   htmlFor="edit-profile-location">Location</label>
            <input className="form-control border-0"
                   id="edit-profile-location" type="text"
                   value={location}
                   onChange={(event) => setLocation(event.target.value)}
                   placeholder="Location"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <input className="ms-2 text-secondary border-0"
                   id="edit-profile-website" type="text"
                   value={website}
                   onChange={(event)=> setWebsite(event.target.value)}
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
                   onChange={(event) => setDateOfBirth(event.target.value)}
                   placeholder="Jan 1, 2000"/>
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