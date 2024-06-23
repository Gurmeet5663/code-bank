import React, { useState } from 'react'
import { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
import Modle from './modle'
import Editmodel from './editmodel'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco,darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect,useRef } from 'react'

function NoteItem(props) {
    const context=useContext(NotesContext)
    const{showAlert,deleteNote}=context
    const deleteModel="deleteModel"
    const {note}=props
    const [content,setcontent]=useState({title:note.title,description:note.description,tag:note.tag})
    const updateContent=(obj)=>{
      setcontent(obj)
    }
    useEffect(() => {
      
    }, []);

    const textDivRef = useRef(null);

    const copyToClipboard = () => {
      if (textDivRef.current) {
        const text = textDivRef.current.innerText;
        navigator.clipboard.writeText(text).then(() => {
          showAlert("text copied to clipboard")
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      }
    };

  return (
    <div>
      <Editmodel id={props.note._id} title={content.title} description={content.description} tag={content.tag} updateContent={updateContent}/>
      <Modle modleId={props.note._id+"i"} title="Delete Note" value="Do you want to delete this note" Accept="Delete" holderFunction={()=>{showAlert("Note Deleted") ; deleteNote(props.note._id)}}></Modle>
        <div className="card my-2 bg-dark border border-0 text-white shadow ">
  <div className="card-body ">
    <h5 className="card-title fw-light">{content.title}</h5>
    <i className="fa-regular fa-clipboard float-end fw-light" style={{"scale":"1.3"}} onClick={copyToClipboard}></i>
    <h6 className="card-subtitle mb-2 text-white fw-light">{content.tag}</h6>
    <pre className=" card-title fs-6 fw-lighter"  ref={textDivRef} >
    <SyntaxHighlighter className="codepage" language={content.tag} style={darcula}>
    {content.description}
    </SyntaxHighlighter>
    </pre>
    <i  style={{"scale":"1.3"}} type="button" className="card-link fa-solid fa-trash-can fw-light"  data-bs-toggle="modal" data-bs-target={`#${props.note._id}i`}></i>
    <i  style={{"scale":"1.5"}} className="card-link fa-regular fa-pen-to-square mx-4 fw-light" data-bs-toggle="modal" data-bs-target={`#${props.note._id}` }data-bs-whatever="@getbootstrap" ></i>
    
  </div>
</div>
      
    </div>
  )
}

export default NoteItem
