import React ,{useContext, useEffect, useState}from 'react'
import NotesContext from '../context/notes/NotesContext'
import Modle from './modle'

function Addnote() {
    
    const context=useContext(NotesContext)
    const {notes,setnotes,showAlert,addNotes,message}=context
    const obj={title:"",description:"",tag:""}
    const [note,setnote]=useState(obj)
    const url="http://localhost:7000/"
    const Modal="addModal"
    const onchange=()=>{
      const title =document.getElementById("title")
      const description=document.getElementById("description")
      const tag=document.getElementById("tag")
      setnote({title:title.value,description:description.value,tag:tag.value}) 
      // console.log("changed")
    }
    const exitText=()=>{
      const title =document.getElementById("title")
      const description=document.getElementById("description")
      const tag=document.getElementById("tag")
      title.value=""
      description.value=""
      tag.value=""
    }
   const [you,setYou]=useState("")
   const handleYou=async()=>{
    const responce= await fetch(`${url}auth/getdata`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authtoken": localStorage.getItem("token")
      }
    })
    const json=await responce.json()
    const{ name,email,native}=json
    setYou(name)
   }
   useEffect(()=>{
handleYou()
   },[])
   
  return (
    <div>
      {you&&<div className="text-center " >
       <h5> Hey, {you} ! welcom to codyFy, best place to save your cheat codes.</h5>
      </div>}
       <Modle modleId={Modal} title="Note Added" value="Do you want to add this Note" Accept="Add" holderFunction={()=>{showAlert("Note added");addNotes(note);exitText()}}/>
      <h1 style={{"textAlign":'center'}}>Add Code</h1>
      <form >
  <div className="mb-3">
    <label htmlFor="exampleInput1" className="form-label">Title:</label>
    <input type="text" className="form-control ex bg-dark border border-0 text-white shadow" id="title" onChange={onchange} required name='title' />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInput2" className="form-label">Code:</label>
    <textarea type="text" style={{"height":"104px"}} className="form-control ex bg-dark border border-0 text-white shadow" id="description" onChange={onchange} required name='description'/>
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="example" className="form-label">Choose a car:</label>
    <select type="text" className="form-control ex bg-dark border border-0 text-white shadow" id="tag" onChange={onchange} required name="tag" >
      <option value="javascript" defaultValue >javascript</option>
      <option value="c++">c++</option>
      <option value="c language">c language</option>
      <option value="python">python</option>
      <option value="java">java</option>
    </select>
    </div>
  
</form>
  <button type="submit" id="add" className="btn btn-primary" disabled={ ! ( note.description )} data-bs-toggle="modal" data-bs-target={`#${Modal}`}>Add</button>
    </div>
  )
}

export default Addnote
