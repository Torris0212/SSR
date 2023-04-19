import React from "react";
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";

export default function Users () {
  const users = useSelector(state => state.users);

  return (
    <div>
      <Helmet>
        <title>Users List</title>
        <meta property="og:title" content="Users" />
      </Helmet>
      <h3>Here's a big list of users</h3>
      <ul>
        {users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  )
}
