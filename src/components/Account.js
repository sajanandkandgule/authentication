import React,{useState , useEffect} from "react";
import axios from "axios"

const Account = (props) =>{
    const [users , setUsers] = useState({})

    useEffect(() =>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account" ,{
            headers:{
                "x-auth" :localStorage.getItem("token")
            }
        })
        .then((response) =>{
            // console.log(response.data)
            const result = response.data
            setUsers(result)
        })
        .catch((err) =>{
            console.log(err)

        })
    },[])

    return(
    <div>
        <h2> User Account</h2>
        <p>email - {users.email}</p>
        <p>username - {users.username}</p>
    </div>
    )
}
export default Account