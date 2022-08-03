import React from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { startAddNote } from '../action/notesAction'

const AddNotes = (props) => {

    const dispatch = useDispatch()
     const handleSubmission=(data)=>{
         console.log( 'data',data)
         dispatch(startAddNote(data))
     }
  return (
    <div>
    <Form handleSubmission={handleSubmission}/>
    </div>
  )
}

export default AddNotes