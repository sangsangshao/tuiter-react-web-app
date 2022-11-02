import {useState} from "react";
import Counter from "./counter.js";
import Email from "./email.js";

const ComponentState = () => {
  const [count, setCount] = useState(123);
  const[email, setEmail] = useState('alice@wonderland.com')
  const[bio, setBio]  = useState('lego enthusiast')
  const [showBio, setShowBio] = useState(true)
  const [editingEmail, setEditingEmail] = useState(false)
  const [profile, setProfile] = useState({
    firstName: 'Alice', lastName: 'Wonderland',
    userName: 'alice123', password: 'p@ssw0rd'
  })

  const changeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    console.log(newEmail)
  }

  const up = () => {
    setCount(count + 1);
    console.log(count);
  }
  const down = () => {
    setCount(count - 1);
    console.log(count);
  }
  const setFirstName = (e) => {
    const newFirstName = e.target.value;
    const newProfile = {
      firstName: newFirstName,
      lastName: profile.lastName,
      userName: profile.userName,
      password: profile.password
    }
    setProfile(newProfile)
  }
  const setLastName = (e) => {
    const newLastName = e.target.value;
    const newProfile = {
      ...profile,
      lastName: newLastName
    };
    setProfile(newProfile)
  }

  return(
      <>
      <h3>Component State</h3>
        <h4>Objects</h4>
        First Name:
        <input
            onChange={setFirstName}
            value={profile.firstName}/><br/>
        Last Name:
        <input
            onChange={setLastName}
            value={profile.lastName}/><br/>
        Username:
        <input
            onChange={(e) => setProfile({
                ...profile, username: e.target.value
            })}
            value={profile.userName}/><br/>
        Password: <input value={profile.password} type="password"/><br/>
        <pre>
          {JSON.stringify(profile, null, 2)}
        </pre>

        <hr/>
        <input
            type="checkbox"
            onChange={(e) => setShowBio(e.target.checked)}
            checked={showBio}/>
        {
          showBio &&
        <>
          <h4>Bio</h4>
          <textarea
              value={bio}
              onChange={
                (e) => setBio(e.target.value)
              }></textarea>
        </>
        }

        <Email
            email={email}
            changeEmail={changeEmail}
            editingEmail={editingEmail}
            setEditingEmail={setEditingEmail}/>

        <Counter
          count ={count}
          up={up}
          down={down}
          email={email}
        />
        <h4>Counter</h4>
        count = {count}
        <button onClick={up}>Up</button>
        <button onClick={down}>Down</button>
        <h1>Email = {email} {count}</h1>
      </>
  )
}
export default ComponentState;