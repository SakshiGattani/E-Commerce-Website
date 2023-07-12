// import navcomponent from "../components/navcomponent";

import { useEffect, useState } from "react";
import { product } from "../data/data";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// export default function Homescreen(){
//   return(
//     <>
//     {navcomponent()}
//     <div className="parent">
//     <div className="main">
//       <h1 className="a"> Grand Coffee</h1> 

//       {/* <img src={require('../image/seaech-icon')}/> */}   
//     </div>
//     <div className="aa">
//       <img src={require('../image/banner-bg.png')}className="imagee"/>
//       <p className="q"> Outstanding </p>
//       <h3 className="r"> Coffee Shop</h3>
//       <p className="t"> There are many variations of passages of Lorem Ipsum available,</p>
//       <p className="w">  but the majority have suffered alteration in some form, by injected humour,</p>
      
//       <button> LEARN MORE</button>
      
      
//     </div>
//     </div>
//     </>
//   )
// }
export default function Homescreen(){
  
  const nav=useNavigate()
  
  const[user, setUser] =useState(localStorage.getItem("user"))
  const[product1,setproduct]=useState(product)

  
  console.log(product1);
  useEffect(()=>
  {
    async function show()
    {
      // const res=await axios.get("http://ankursingh.xyz/api/productshow.php")
      // console.log(res.data.body);
      // // setproduct(res.data.body)
    }
    show()


  },[] 
   )




 

 
  
  return(
    <>
    {/* <h1 className=" text-h1">Homescreen</h1> */}
    <div className=" product-detail">
    {
     product1&& product1.map(d=>(
        <div className="productshow" onClick={()=>nav("/details",{state:d})}>
        <img src={d.img} className= "product-img" />
        <p className="name">{d.name}</p>
        <p className="rate">{d.Rate}</p>
       </div>

      ))
    }
      
    </div>
    
    
    </>
  )
}