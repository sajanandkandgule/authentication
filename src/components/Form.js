import React ,{useState} from 'react'

const Form = (props) => {
     const {handleSubmission} = props
    const [title , setTitle] = useState("")
    const [ body ,setBody] = useState("")

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) =>{
        setBody(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            title:title,
            body:body
        }
        console.log(formData)
        handleSubmission(formData)
        setTitle('')
        setBody('')
    }


  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label> Title</label><br/>
            <input type ="text" value ={title} onChange= {handleTitleChange}/><br/>
            <label> Body</label><br/>
            <input type ="text" value ={body} onChange = {handleBodyChange}/><br/>
            <input type ="submit" value = "Add"/>

        </form>


    </div>
  )
}

export default Form