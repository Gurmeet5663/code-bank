import React from 'react'
import { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
import { useNavigate } from 'react-router-dom'

function Login() {
const context=useContext(NotesContext)
const {showAlert}=context
const navigate=useNavigate()
 const url="http://localhost:7000/"

 const handleOnSubmit=async(e)=>{
  
      
     e.preventDefault()
     const emaill=document.getElementById("email")
     const passwordl=document.getElementById("password")
   
    const responce= await fetch(`${url}auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
         },
      body: JSON.stringify({email:emaill.value,passward:passwordl.value})
    })
  
    const json=await responce.json()
    
    if (json.success) {
      //save the authtoken to the localstorage and redirect 
      localStorage.setItem("token",json.authtoken)
      navigate("/")
     
    }
    else{
      alert(json.error)
    }
    showAlert("User Login successfully")

    }


  return (
    <div>
        <h1 className='text-center'>Login!</h1>
      <form  onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
 
  <button type="submit"  className="btn btn-primary" >Login</button>
</form>
    </div>
  )
}

export default Login
