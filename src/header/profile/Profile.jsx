// import React from 'react'

const Profile = (props) => {
    console.log(props)
  return (
    <div>
      This is Profile of {props.sharedName}.
      Raddom value is {props.sharedName}.
    </div>
  );
}
export default Profile;
