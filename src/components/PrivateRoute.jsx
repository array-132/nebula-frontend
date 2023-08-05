import { Outlet ,Navigate} from "react-router-dom"
import { isLoggedIn } from "../auth/auth"

const PrivateRoute = () => {
  
//     let loggedIn = isLoggedIn()
  
//     if(loggedIn){
//         return <Outlet/>
//     }
//     return (
//     <Navigate to="/login"/>
//   )

    return isLoggedIn() ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute