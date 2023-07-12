import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function DetailScreen(){
    
    const nav=useNavigate()
    const loc=useLocation()
    const[data,setdata]=useState(loc.state)
    console.log(data);
    return(
        
            <div className='Product-Details'>
            {/* <div className='pro' onClick={()=> nav("/Profile")}> */}
            <div className='Pro-Details'>
                <img src={data.img} className='Imagess'/>   
                <p className='p-name'>{data.name}</p>  
                <p className='p-rate'>{data.Rate}</p>  
                <button onClick={()=>nav("/Order",{state:data})}>Payment</button> 
                </div>
        </div>
    )
}