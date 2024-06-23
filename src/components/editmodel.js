import React, { useState } from 'react'
import { useContext } from 'react';
import NotesContext from '../context/notes/NotesContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco,darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Editmodel(props) {
    const context=useContext(NotesContext)
    const{showAlert,updateNote}=context
    const{title,description,tag,id,updateContent}=props

    const [notes,setnotes]=useState({title:title,description:description,tag:tag})
    const editText=(e)=>{
      setnotes({...notes,[e.target.name]:e.target.value})
    }
    const update=async()=>{
      updateContent(notes)
      updateNote(id,notes)

    }
    
  return (
    <div>
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{"backgroundColor":"#2C2C2C"}}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{"backgroundColor":"white"}}></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Title:</label>
            <input type="text" className="form-control bg-dark border border-0 text-white shadow editable" name='title' id="recipient-name" value={notes.title}  onChange={editText} />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Description:</label>
            <textarea className="form-control editable bg-dark border border-0 text-white shadow" style={{"height":"130px"}} id="message-text" name='description' value={notes.description} onChange={editText} ></textarea>
          </div>
          <div className="mb-3">
          <label htmlFor="example" className="form-label">Choose a car:</label>
    <select type="text" className="form-control ex bg-dark border border-0 text-white shadow editable" id="tag" onChange={editText} value={notes.tag} required name="tag" >
      <option value="javascript" defaultChecked >javascript</option>
      <option value="c++">c++</option>
      <option value="c language">c language</option>
      <option value="python">python</option>
      <option value="java">java</option>
    </select>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{showAlert("Note Updated");update()}}>Update</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Editmodel
