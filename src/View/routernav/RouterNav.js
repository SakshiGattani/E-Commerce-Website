import { Route, Routes ,Link, useNavigate} from "react-router-dom";
import Homescreen from "../screen/Homescreen";
import Detailsscreen from "../screen/Detailsscreen";
import Registrationscreen from "../screen/Registartionscreen";
import Loginsscreen from "../screen/Loginsscreen";
import Profile from "../screen/Profile";
import Orderscreen from "../screen/Orderscreen";
import Cartscreen from "../screen/Cartscreen";
import { useState } from "react";


export default function RouterNav(){
  const nav=useNavigate()
  const[user,setUser]=useState(localStorage.getItem("user"))
  function logout(){
    localStorage.clear()
    window.location.reload()
  }

    return(
      
     <>
     <div className="navbar1">
      <Link to ="/" className="nav-link">Home</Link>
      {
        user==null?
      <>

      <Link to ="/login" className="nav-link">Login</Link>
      <Link to ="/registration" className="nav-link">Register</Link>
      </>
      :
      <>
      <Link to="/profile" className="nav-link">Profile</Link>
      <button onClick={logout} className="Pro-link">logout</button>
      </>
}
      
     </div>
     
      <Routes>
        <Route path="/" Component={Homescreen}/>
       {/*  <Route path="/Home" Component={Homescreen}/> */}
        <Route path="/login"Component={Loginsscreen}/>
        <Route path="/details"Component={Detailsscreen}/>
        <Route path="/registration"Component={Registrationscreen}/>
        <Route path="/profile"Component={Profile}/>
        <Route path="/cart"Component={Cartscreen}/>
        <Route path="/Order"Component={Orderscreen}/>

        
      </Routes>
      
      </> 
      
    )
  }