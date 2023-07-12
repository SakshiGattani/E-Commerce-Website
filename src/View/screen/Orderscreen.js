import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Order(){
    const nav=useNavigate()
    const[Firstname,setname]=useState("")
    const[Lastname,setlastname]=useState("")
    const[Contactnumber,setnumber]=useState("")
    const[Localaddress,setaddress]=useState("")
    const[Permanentaddress,setPeraddress]=useState("")
    const[email,setemail]=useState("")

    function usersubmit(){
        console.log(Firstname);
        console.log(Lastname);
        console.log(email);
        console.log(Contactnumber);
        console.log(Localaddress);
        console.log(Permanentaddress);
        // nav("/")
    }

    
    return(
        
          <div className="register-main-div">
      <div className="register-main-div-mid">
        <div className="register-main-div-info">
          <h2>Order Form</h2>
        </div>  
          
        <div className="register-main-div-username">
          <h4>Enter Name</h4>
          <input type="text"  value={Firstname} onChange={user=>setname(user.target.value)} placeholder="Enter Firstname" className="register-main-div-email-input"/>
        </div>   
        <div className="register-main-div-lastname">
          <h4>Enter Lastname</h4>
          <input type="text"  value={Lastname} onChange={user=>setlastname(user.target.value)}  placeholder="Enter Lastname" className="register-main-div-email-input"/>
        </div>    
        <div className="register-main-div-Contactnumber">
          <h4>Enter Contactnumber</h4>
          <input type="text"  value={Contactnumber} onChange={user=>setnumber(user.target.value)}  placeholder="Enter contactnumber" className="register-main-div-email-input"/>
        </div> 
        <div className="register-main-div-localaddress">
          <h4>Enter Localaddress</h4>
          <input type="text"  value={Localaddress} onChange={user=>setaddress(user.target.value)}  placeholder="Enter Localaddress" className="register-main-div-email-input"/>
        </div>   
        <div className="register-main-div-permanentaddress">
          <h4>Enter Permanentaddress</h4>
          <input type="text"  value={Permanentaddress} onChange={user=>setPeraddress(user.target.value)}  placeholder="Enter Permanentaddress" className="register-main-div-email-input"/>
        </div>
        <div className="register-main-div-email">
          <h4>Enter email</h4>
          <input type="text"  value={email} onChange={user=>setemail(user.target.value)}  placeholder="Enter Email" className="register-main-div-email-input"/>
        </div>  
        
      </div>
      <div className="register-main-div-btn-1">
        <button  className="register-main-div-submit-btn-1"onClick={usersubmit}>Submit</button>
      </div>
     </div>
  

    )
}