import {useSelector} from "react-redux";

const ProfileScreen = () => {
  const currentUser = useSelector((state) => state.currentUser)
  return(
      <>
      <h3>Profile Screen</h3>
        {currentUser.firstName}
        <pre>
          {JSON.stringify(currentUser)}
        </pre>
      </>
  )
}
export default ProfileScreen;