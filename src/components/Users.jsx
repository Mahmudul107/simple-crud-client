/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)


  const handleDeleteUser = (_id) => {
    // Perform the logic to delete the user with the given _id
    console.log(`Deleting user with _id: ${_id}`);
    // Make an API request or update the user state accordingly
    fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remainingUsers = users.filter(user => user._id !== _id)
                setUsers(remainingUsers)
            }
        })
  };

  return (
    <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p 
                        key={user._id}
                        > {user.name} : {user.email} {user._id}
                         <button
                            onClick={ () => handleDeleteUser(user._id)}
                        >X</button> </p>)
                }
            </div>
            <Link to='/'><button>Back To Home</button></Link>
        </div>
  );
};

export default Users;


