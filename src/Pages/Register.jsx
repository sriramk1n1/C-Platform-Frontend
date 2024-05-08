import Navbar from '../Components/Navbar';
import { useEffect, useState} from 'react';
import {Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import {ListboxWrapper} from "../Components/ListboxWrapper";
import {Divider} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import React from 'react';


function Login(props) {
  const [data,setdata] = useState("")
    const handleLogin = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        body: formData
        }).then(response => response.text()).then(data => {
          setdata(data)
          if (data.startsWith("U")) {}
          else {
            setdata("Successfully registered. Procceed to login")
          }
        }).catch(error => {
        console.error('There was a problem with login', error);
      });    
}
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
      <>
        <Navbar {...props}></Navbar>
        <div className={`${props.toggle.dark?"bg-gray-950":""} h-screen flex-column text-center`}>
            <div className='p-2'>
            Welcome, Please Register. 
            </div>
            <form onSubmit={handleLogin}>
                <div className='p-2'>
                <input placeholder='Enter email' type="email" name="email" className='border-2' onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className='p-2'>
                <input placeholder='password' type="password" name="password" className='border-2' onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div>
                    <button className='border-2 bg-gray-200'> Register </button>
                </div>
                {data && data}
            </form>   
        </div>
      </>
  )
  }

export default Login