import React from 'react';
import { Link } from 'react-router-dom';

const BrowseUsers = () => {
  const users = [
    { name: 'Vasya', userId: 1 },
    { name: 'Misha', userId: 2 },
    { name: 'Valera', userId: 3 },
    { name: 'Igor', userId: 4 }
  ];

  return (
    <div>
      <h1>User Profile</h1>
      <hr />
      {users.map((user) => {
        return <div key={user.userId}>
          <Link to={`/users/${user.userId}`}>{user.name}</Link>
        </div>
      })}

    </div>
  )
}

export default BrowseUsers;