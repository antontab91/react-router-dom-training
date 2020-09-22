import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

const UserProfile = (props) => {
  console.log(props)
  console.log(useParams())
  console.log(useHistory())
  console.log(useLocation())
  console.log(useRouteMatch())

  return (
    <div>
      <h1>{`User Profile: ${props.match.params.userId}`}</h1>
    </div>
  )
}

export default UserProfile;