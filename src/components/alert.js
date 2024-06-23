import React, { useEffect } from 'react'
import { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
function Alert(props) {
const context=useContext(NotesContext)
const {flashAlert,setFlashAlert}=context
useEffect(()=>{
    setTimeout(() => {
        setFlashAlert(null)
    }, 2000)
},[flashAlert])
  return (
    <div style={{"height":"60px"}}>
   { flashAlert &&<div>
      <div className="alert alert-primary fixed-top" role="alert">
 <div style={{"lineHeight":"30px"}}>
  {flashAlert}

 </div>
</div>
</div>}
    </div>
  )
}

export default Alert
