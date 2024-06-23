import React, { useEffect } from 'react'
import NoteItem from './noteItem'
import { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
import { useNavigate } from 'react-router-dom'

function Notes() {
  const navigate=useNavigate()
    const context=useContext(NotesContext)
    const {notes,getNotes,deleteAll}=context    //notes is a list or array
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes()
        
      }
      else{
          navigate("/login")
      }
  },[])
      




    const handleDeleteAll=()=>{
      deleteAll()
    }
  return (
    <div className='my-3'>
      <div>
        <h1 className='text-center'>Your Codes</h1>
        <i id='eicon' style={{"marginLeft":"100%","scale":"1.7"}} className="fa-solid fa-eraser " onClick={handleDeleteAll}> </i>
        
        </div>
        <div className="row">
          {notes.length==0?<h3>No Notes Found!</h3>: notes.map((note)=>{
    return(
        <div className="col-md-6">
     <NoteItem key={note._id} note={note}/>
     </div>
    )
  })}
    {/* {
  notes.map((note)=>{
    return(
        <div className="col-md-4">
     <NoteItem note={note}/>
     </div>
    )
  })
}   */}

</div>


    </div>
  )
}

export default Notes
