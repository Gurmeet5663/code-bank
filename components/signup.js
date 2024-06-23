
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
import { useState } from 'react'

function Signup() {
  const context = useContext(NotesContext)
  const { showAlert } = context
  const navigate = useNavigate()
  const url = "http://localhost:7000/"
  const [signUpUserCredentials, setsignUpUserCredentials] = useState({ name: "", age: "", email: "", passward: "" ,native:""})

  const handlechange=(e)=>{
setsignUpUserCredentials({...signUpUserCredentials,[e.target.name]:e.target.value})
  }
  // function for login and getting authtoken
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const {name,age,email,passward ,native}=signUpUserCredentials
    const responce = await fetch(`${url}auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email,name,passward,age,native
       })
      //  body: JSON.stringify({email:email,passward:passward,age:age,name:name})
    })

    const json = await responce.json()
    
    const p = json.success

    if (p) {
      //save the authtoken to the localstorage and redirect 
      localStorage.setItem("token", json.authtoken)
      navigate("/")
      showAlert("User sign Up successfully")
    }
    else {
      alert("fill all the fields carefully")

    }
   

  }

  // const handleOnChange=(e)=>{
  //   setsignUpUserCredentials({...signUpUserCredentials,[e.target.name]:e.target.value})
  // }

  return (
    <div>
      <h1 className="text-center">SignUp!</h1>
      <form onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name :</label>
          <input type="text" className="form-control" id="name" name='name' onChange={(e)=>{handlechange(e)}} aria-describedby="emailHelp" />
          <label htmlFor="address" className="form-label">Address :</label>
          <input type="text" className="form-control" id="address" name='native' onChange={(e)=>{handlechange(e)}} aria-describedby="emailHelp" />
          <label htmlFor="age" className="form-label">Age :</label>
          <input type="number" className="form-control" id="age" name='age' onChange={(e)=>{handlechange(e)}} aria-describedby="emailHelp" />
          <label htmlFor="emails" className="form-label">Email address :</label>
          <input type="email" className="form-control" id="emails" name='email' onChange={(e)=>{handlechange(e)}} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Pass" className="form-label">Password :</label>
          <input type="password" name='passward'  onChange={(e)=>{handlechange(e)}} className="form-control" id="passwords" />
        </div>

        <button type="submit" className="btn btn-primary" >SignUp</button>
      </form>
    </div>
  )
}

export default Signup
