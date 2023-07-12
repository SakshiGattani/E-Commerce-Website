// import { useState } from "react"
// import { Navigate } from "react-router-dom";

// export default function Loginsscreen(){
//     const nav=Navigate
    
//     const [user,setUser] = useState(localStorage.getItem("user"))
//     const  [Email,setEmail]= useState("")
//     const  [Password,setPassword]= useState("")

//     function LoginUser(){
//         console.log(Email);
//         console.log(Password);
//         if(Email!=="" && Password!==""){
//           localStorage.setItem("user",Email)
//           nav("/home")
//           setEmail("")
//         setPassword("")
             
//         }
//         else{
    
//           alert("Enter form...")
        
//         }
//     }
//     function  Registeruser(){
//         alert("register")
//         nav("/register")
//           }
        
//           function usernav(){
//             console.log("nav");
         
            
//             nav("/home")
//           }
//           console.log(user);

//     return(
//         <>
//         {
//         user==null?
//         <div className="register-main-div">
//             <div className="register-main-div-mid">
//             <div className="register-main-div-info">
//                 <h1> Login Form</h1>
//             </div>
            
//             <div className="register-main-div-email">
//                 <h4> Enter Email:</h4>
//                 <input type="text" value={Email} onChange={user=>setEmail(user.target.value)} placeholder="Enter Email" className="register-main-div-email-input"/>
//             </div>
//             <div className="register-main-div-Password">
//                 <h4> Enter Password:</h4>
//                 <input type="Password" value={Password} onChange={user=>setPassword(user.target.value)} placeholder="Enter Password " className="register-main-div-Password-input"/>
//             </div>
//             <div className="register-main-div-btn">
//                 <input type="button" onClick={LoginUser} className="register-main-div-register-btn" value="Login"/>
//             </div>
//             <div className="line">
//             </div>  
//             <div className="register-main-div-btn">
//                 <input type="button" onClick={Registeruser} className="register-main-div-register-btn" value="Register"/>
//             </div>  
//             </div>

//         </div>
//         :
//         usernav()
// }
//         </>
//     )
// }
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Loginsscreen(){
  const nav = useNavigate()

  const [user,setUser] = useState(localStorage.getItem("user"))
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  async function Loginruser(){
    console.log(email);
    console.log(password);
    const params = {
      "email":email,
      "pass":password,
      
  }
 
  const res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
  console.log(res.data);
const {message,success}=res.data
  console.log(params);
  if(success){
    alert(message)
  }
    if(email!=="" && password!==""){
      localStorage.setItem("user",email)
      nav("/")
      window.location.reload()
      setEmail("")
    setPassword("")
         
    }
    else{

      alert("enter form...")
    
    }
   
  }


  function  Registeruser(){
alert("registration")
nav("/registration")
  }

  function usernav(){
    console.log("nav");
 
    
    nav("/")
  }
  console.log(user);
    return(
      <>
      {
        user==null?
     <div className="register-main-div">
      <div className="register-main-div-mid">
        <div className="register-main-div-info">
          <h2>User Login..</h2>
        </div>  
          
        <div className="register-main-div-email">
          <h4>Enter Email.</h4>
          <input type="text"  value={email} onChange={user=>setEmail(user.target.value)} placeholder="Enter email..." className="register-main-div-email-input"/>
        </div>   
        <div className="register-main-div-email">
          <h4>Enter password.</h4>
          <input type="password"  value={password} onChange={user=>setPassword(user.target.value)}  placeholder="Enter password..." className="register-main-div-email-input"/>
        </div>  

        <div className="register-main-div-btn">
          <input type="button" onClick={Loginruser} className="register-main-div-register-btn" value="Login"/>
        </div>  
        <div className="line">
           </div>  
        <div className="register-main-div-btn">
          <input type="button" onClick={Registeruser} className="register-main-div-register-btn" value="Register"/>
        </div>  
      </div>
     </div>
     :
    usernav()
}
      </>
    )
  }