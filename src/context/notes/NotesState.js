
import NotesContext from "./NotesContext";
import { useState } from "react";
const NotesState=(props)=>{
  //function for alert
  const [flashAlert,setFlashAlert]=useState(null)
  const showAlert=(massage)=>{
    
    setFlashAlert(massage)
  }
  
  

 const url="http://localhost:7000/"

   const initialNotes= []
   const [notes,setnotes]=useState(initialNotes)


   //function for get all notes
   
   const getNotes= async()=>{
    const responce= await fetch(`${url}notes/getnotes`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authtoken": localStorage.getItem("token")
      }
    })
    const json=await responce.json()
    setnotes(json)

   }
   //function for add notes


   const addNotes = async(note)=>{
    const newnote={ 
      title:note.title,description:note.description,tag:note.tag
  }
    const responce= await fetch(`${url}notes/addnotes`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authtoken": localStorage.getItem("token")
      },
      body: JSON.stringify(newnote)
    })

    const json=await responce.json()
    setnotes(notes.concat(json))
   }

   
   //function for Update notes
   
const updateNote=async(id,obj)=>{
  const responce= await fetch(`${url}notes/updatenotes/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "authtoken": localStorage.getItem("token")
    },
    body: JSON.stringify(obj)
  })

}


//function for delete notes
      const deleteNote=async(id)=>{

        const responce= await fetch(`${url}notes/deletenote/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json",
            "authtoken": localStorage.getItem("token")
          }
        })
    
        const json=await responce.json()

             const newnote=notes.filter((note)=>{return id!==note._id})
             setnotes(newnote)
      }

//delete all
const deleteAll=async()=>{
  
  const responce= await fetch(`${url}notes/clearAll`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "authtoken": localStorage.getItem("token")
    }
  })
  // const json= await responce.json()
  // console.log(json)
setnotes(initialNotes)
  
}



return(
    <NotesContext.Provider value={{notes,setnotes,showAlert,flashAlert,setFlashAlert ,deleteNote,getNotes,addNotes,updateNote,deleteAll}}>
        {props.children}
    </NotesContext.Provider>
)

}

export default NotesState