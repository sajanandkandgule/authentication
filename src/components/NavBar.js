import React from 'react'
import {Route , Link , withRouter} from "react-router-dom"
import Home from "./Home"
import Registers from './Registers'
import Login from './Login'
import Account from './Account'
import MyNotes from './MyNotes'

export const NavBar = (props) => {

    const {userLoggedIn , handleAuth} = props

  return (
    <div>

<ul>
      <li><Link to ="/">Home</Link></li>
      {
        userLoggedIn ? (
            <>
            <li><Link to ="/account">Account</Link></li>
            <li><Link to ="/mynotes">MyNotes</Link></li>
            <li><Link to = "/" onClick = {() =>{
                localStorage.removeItem("token")
                alert("successfully logout")
                handleAuth()
                props.history.push("/")
            }}>Logout</Link></li>
            
            </>
        ) :(
            <>
            <li><Link to ="/registers">Registers</Link></li>
            <li><Link to ="/login">Login</Link></li>
            </>
        )
      }
      

      </ul>


      <Route path = "/" component={Home} exact ={true} />
      <Route path = "/registers" component={Registers}/>
      <Route path = "/login"render={(props) =>{
        return <Login
        {...props}
        handleAuth ={handleAuth}
        />
      }}/>
      <Route path ="/account" component={Account}/>
      <Route path ="/mynotes" component={MyNotes}/>

    </div>
  )
}
export default  withRouter(NavBar)  
