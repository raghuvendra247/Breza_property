import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth(){

    const navigate=useNavigate()
   useEffect(()=>{
    var path=window.location.pathname;

    if(path==="/admin"||path==="/manageusers"||path==="/AddCategory")
    {
        if(!localStorage.getItem("token")||localStorage.getItem("role")!=="admin")
        navigate("/logout")
    }
    else if(path==="/user"||path==="/cpuser"||path==="/epuser")
    {
        if(!localStorage.getItem("token")||localStorage.getItem("role")!=="user")
        navigate("/logout")
    }
    else
    {
        if(localStorage.getItem("role")==="admin")
       navigate("/admin")
      else if(localStorage.getItem("role")==="user")
      navigate("/user")
     else
     navigate("/")
    }

   },[]);
    return(<>
    </>)
}
export default Auth