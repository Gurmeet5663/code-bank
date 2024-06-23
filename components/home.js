import React ,{useContext}from 'react'
import NotesContext from '../context/notes/NotesContext'
import Notes from './notes'
import Modle from './modle'
import Addnote from './addnote'

function Home() {
  const addModel="addModal"
   const context=useContext(NotesContext)
   const {notes,setnotes,showAlert,addNotes}=context
  return (
    < >
<Addnote/>
<Notes/>
    </>
  )
}

export default Home
