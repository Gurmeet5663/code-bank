import React, { useEffect } from 'react'
import{Link,useNavigate,useLocation} from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  const location=useLocation()       //now location is a state (object) which will change whenever we navigate the pages 
 const handleLogOut=()=>{
  localStorage.removeItem("token")
  navigate("/login")
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">codyFy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/"?"active":""}`}aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/about"?"active":""}`}to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/userdetails"?"active":""}`} to="/userdetails">Userdetails</Link>
        </li>
        
       { !localStorage.getItem("token")? <li className="nav-item" >
         <Link type="button" style={{"display":"inline"}} className={`nav-link  ${location.pathname==="/login"?"active":""}`} to="/login">Login</Link>
         </li>:<button className="nav-link" onClick={handleLogOut}>logout</button>}


         { !localStorage.getItem("token")? 
         <Link type="button " style={{"display":"inline"}} className={`nav-link  ${location.pathname==="/signup"?"active":""}`} to="/signup">Singup</Link>
        :""}
        </ul>

        
        

        

        
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
