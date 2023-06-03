import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserData = ({ user, getUsers }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    let { id } = user;
    navigate(`/update-user/${id}`);
    //   console.log(user);
  };

  const handleDelete = () => {
    const URL = "http://localhost:3001/users";
    let { id, firstname, lastname, email } = user;
    if (window.confirm(`Please confirm to delete user with Name: ${firstname + " " + lastname} and Email: ${email}!`)) {
      axios.delete(URL + "/" + id)
        .then(res => {
          getUsers();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.gender}</td>
      <td>{user.dob}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn btn-outline-info' onClick={handleUpdate}>Update</button>
        <button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default UserData;
