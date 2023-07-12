import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Registrationscreen(){
    const nav=useNavigate()
    const  [Username,setUsername]= useState("")
    const  [Lname,setLname]=useState("")
    const  [Email,setEmail]= useState("")
    const  [Password,setPassword]= useState("")
    const  [Confirmpass,setConfirmpass]=useState("")

  async  function RegisterUser(){
        console.log("Register");
        console.log(Username);
        console.log(Lname);
        console.log(Email);
        console.log(Password);
        console.log(Confirmpass);
        const params = {
            "fname":Username,
            "lname":Lname,
            "email":Email,
            "pass":Password,
            "cpass":Confirmpass
        }
       
        const res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
        console.log(res.data);
const {message,success}=res.data
        console.log(params);
if(success){
alert(message)
     nav("/login")
            setEmail("")
          setPassword("")
          setUsername("")
               
          }
          else{
      
            alert("enter form...")
          
          }
    }

    return(
        <>
        <div className="register-main-div">
            <div className="register-main-div-mid">
            <div className="register-main-div-info">
                <h1> Registration Form</h1>
            </div>
            <div className="register-main-div-username">
                <h4> Enter Username:</h4>
                <input type="text" value={Username} onChange={user=>setUsername(user.target.value)} placeholder="Enter Name" className="register-main-div-username-input"/>  
            </div>
            <div className="register-main-div-username">
                <h4> Enter Lastname:</h4>
                <input type="text" value={Lname} onChange={user=>setLname(user.target.value)} placeholder="Enter Lastname" className="register-main-div-username-input"/>  
            </div>
            <div className="register-main-div-email">
                <h4> Enter Email:</h4>
                <input type="text" value={Email} onChange={user=>setEmail(user.target.value)} placeholder="Enter Email" className="register-main-div-email-input"/>
            </div>
            <div className="register-main-div-Password">
                <h4> Enter Password:</h4>
                <input type="Password" value={Password} onChange={user=>setPassword(user.target.value)} placeholder="Enter Password " className="register-main-div-Password-input"/>
            </div>
            <div className="register-main-div-Password">
                <h4> Enter Confirmpass:</h4>
                <input type="Password" value={Confirmpass} onChange={user=>setConfirmpass(user.target.value)} placeholder="Enter Password " className="register-main-div-Password-input"/>
            </div>
            <div className="register-main-div-btn">
                <input type="button" onClick={RegisterUser} className="register-main-div-register-btn" value="Register"/>
            </div>
            </div>

        </div>
        </>
    )
}