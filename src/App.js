import { BrowserRouter ,Route,Routes} from "react-router-dom"
import RouterNav from "./View/routernav/RouterNav"
import './View/style/style.css'
export default function App(){
  return(
    <BrowserRouter>
   <Routes>
      <Route path="*" Component={RouterNav}/> 
    </Routes> 
    
    
    </BrowserRouter>
  )
}