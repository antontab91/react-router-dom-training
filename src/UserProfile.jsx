import React from 'react';

const UserProfile = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{`User Profile: ${props.match.params.userId}`}</h1>
    </div>
  )
}

export default UserProfile;