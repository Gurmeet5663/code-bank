import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Userdetails() {
    const url="http://localhost:7000/"

    const navigate=useNavigate()

    // nameu.value="hi"
    const setcredentials=async()=>{
        const nameu=document.getElementById("nameu")
        const emailu=document.getElementById("emailu")
        const nativeu=document.getElementById("addressu")
        const responce= await fetch(`${url}auth/getdata`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              "authtoken": localStorage.getItem("token")
            }
          })
          const json=await responce.json()
          const{ name,email,native}=json
        nameu.value=name
        emailu.value=email
        nativeu.value=native
        
    }
useEffect(()=>{
  if(localStorage.getItem('token')){
    setcredentials()
    // getNotes()
    
  }
  else{
      navigate("/signup")
  }
      
},[])


  return (
    <div>
      <form disabled>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="email" className="form-control" id="nameu" disabled aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label"> Address</label>
    <input type="email" className="form-control" disabled id="addressu" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="emailu" className="form-label">Email address</label>
    <input type="email" className="form-control" disabled id="emailu" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
</form>
    </div>
  )
}

export default Userdetails
