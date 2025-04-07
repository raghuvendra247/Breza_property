import { Navigate ,useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';

function Verifyuser()
{
   const params=useParams()
   useEffect(()=>{
    var updateDetails={"condition_obj":{"email":params.vemail},"content_obj":{"status":1}}
    axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
     alert("User verified successfully....")
    })
   },[])
    return(
        <>
       <h1>{params.vemail}</h1>
            <Navigate to='/' />
        </>
    )
}

export default Verifyuser