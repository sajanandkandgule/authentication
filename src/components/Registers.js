import React,{useState} from "react";
import axios from "axios";

const Registers = (props) =>{
    const [username  ,setUserName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [formErrors , setFormErrors]= useState({})

    const errors = {}

    const handleNameChange = (e) =>{
        setUserName(e.target.value)
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const runValidation = () =>{
    
        if(username.trim().length === 0){
            errors.username = "Name can not be black"
            // console.log("errors")
        }
        if(email.trim().length === 0) {
           errors.email = "Email can not be black"
        }
        if(password.trim().length === 0){
           errors.password = "password can not be black"
        }

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        runValidation()


            if(Object.keys(errors).length === 0){
                setFormErrors({})
                const formData = {
                    username:username,
                    email:email,
                    password:password
                }
                axios.post("http://dct-user-auth.herokuapp.com/users/register" , formData)
             .then((response) =>{
            console.log(response.data)
            const result = response.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else {
                alert("successfully created account")
                props.history.push("/login")
            }
          
        })

        .catch((err) =>{
            alert(err.message)
        })
            } else {
                // console.log(errors)
                setFormErrors(errors)
            }
   

    }

    // console.log(errors)


    return(
        <div>
            <form onSubmit = {handleSubmit}>
        <input type= "text" value={username} placeholder = "Enter your name" 
        onChange= {handleNameChange}/>
        {
            formErrors.username && <span>{formErrors.username}</span>
        }<br/>
        

        <input type= "text" value={email} placeholder = "Enter your email" 
        onChange= {handleEmailChange}/>
        { formErrors.email && <span>{formErrors.email}</span>}<br/>

        <input type= "password" value={password} placeholder = "Enter your password"
         onChange= {handlePasswordChange}/>
         { formErrors.password && <span>{formErrors.password}</span>}<br/>

        <input type= "submit" value="Register" /><br/>

            </form>

        </div>
    )
}
 export default Registers