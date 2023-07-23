import React, { useEffect, useRef, useState, } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../URLS/urls';
import { useParams,useNavigate } from 'react-router-dom';

const Profile = ({  onSave }) => {

    const {id}=useParams()
    const [user,SetUser]=useState({})
    const go=useNavigate()

    useEffect(()=>{
       axios.get(BASE_URL+`getUser/${id}`).then((response)=>{
        console.log('get user client side user details',response.data);
        SetUser(response.data)
       })
    },[])

  const nameRef = useRef();
  const emailRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {

      userName: nameRef.current.value,
      email: emailRef.current.value,
      
    };
    console.log('form details',updatedUser)
    // onSave(updatedUser);

    axios.post(BASE_URL+`updateUser/${id}`,updatedUser).then((response)=>{

        console.log('update success')
        if(response.data)
        {
            go('/')
        }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          defaultValue={user?.userName}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          defaultValue={user?.email}
        />
      </div>
     
      <button type="submit">Save</button>
    </form>
  );
};

export default Profile;
