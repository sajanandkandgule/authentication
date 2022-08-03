import React from 'react'
import { useDispatch } from 'react-redux'
import { startDelete } from '../action/notesAction'
const NoteItem = (props) => {
  const {_id , title , body} = props

 const dispatch= useDispatch()
   const handleRemove=()=>{
     const confirm = window.confirm('are u sure??')
      if(confirm){
        dispatch(startDelete(_id))
      }
       
   }
  return (
    <div>
      <h3>{title} -- {body}</h3>
       <button onClick={()=>{
        handleRemove(_id)
       }}>X</button>
    </div>
  )
}

export default NoteItem