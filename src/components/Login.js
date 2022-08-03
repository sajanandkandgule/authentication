import React,{useState} from 'react'
import axios  from 'axios'


const Login = (props) => {

    const [email , setEmail] = useState("")
    const  [password , setPassword] = useState("")
    const [formesErrors , setFormErrors] = useState({})
    const errors = {}

        const handleEmailChange =(e) =>{
            setEmail(e.target.value)
        }

        const handlePasswordChange= (e) =>{
            setPassword(e.target.value)
        }


        const runValidation =() =>{
            //name
            if(password.trim().length === 0) {   // trim() is used to element space 
                errors.password = " password can not br black"
            }
            //gmail
            if(email.trim().length === 0) {
                errors.email = "email can not be black"
            }
            //  else if(!validator.isEmail(email)) 
            //     errors.email= "invalid gmail formet"
            // }
        }  


        const handleSubmit = (e) =>{
            e.preventDefault()
            runValidation()
            setFormErrors({})
            if(Object.keys(errors).length === 0){
                setFormErrors({})
            const formData ={
                email:email,
                password:password
            }
            // console.log(formData)
           
            axios.post("http://dct-user-auth.herokuapp.com/users/login" , formData)
            .then((response) =>{
                // console.log(response.data)
                const result = response.data
                if(result.hasOwnProperty("errors")){
                    // console.log(result.errors)
                    alert(result.errors)
                    
                } else {
                    console.log("successfully login")
                    localStorage.setItem("token" , result.token)
                    props.history.push("/")
                    props.handleAuth()
                }
            })
            .catch((err) =>{
                alert((err.message))
            })
        } else {
            // console.log(errors)
            setFormErrors(errors)
        }
            

        }


  return (
    <div>
        <h3>Login</h3>
        <form onSubmit=  {handleSubmit}>
            <input type="text" value={email} placeholder ="Enter your email" onChange = {handleEmailChange}/>
            {
                formesErrors.email && <span>{formesErrors.email}</span>
            }<br/>
           
            <input type = "password" value={password} placeholder ="Enter your password" 
             onChange ={handlePasswordChange}/>
            {
                formesErrors.password && <span>{formesErrors.password}</span>
            }<br/>
            <input type = "submit" value = "login"/>
        </form>

    </div>
  )
}
export default Login
