import React ,{useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'

import { startGetNote } from '../action/notesAction'
import NoteItem from './NoteItem'
const NoteList = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(startGetNote())
   },[dispatch])
 
   const notes = useSelector((state)=>{
     return state.notes
   })
  return (
    <div>
        {notes.length ===0 ? (
            <>
             <h2> No Notes Found</h2>
              <p>Add your new notes</p>
            </>
        ):(
            <>
             <h2>Total Notes = {notes.length}</h2>
              {notes.map((ele , i)=>{
                return <NoteItem  key={ele._id} {...ele} />
              })}
            </>
        )}
    </div>
  )
}

export default NoteList