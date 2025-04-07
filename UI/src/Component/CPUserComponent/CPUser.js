import './CPUser.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';

function CPUser(){
    const navigate=useNavigate();
    const [output,setOutput]=useState();
    const [opassword,setOldPassword]=useState()
    const [npassword,setNewPassword]=useState()
    const [cnpassword,setConfirmNewPassword]=useState()

    const handleSubmit=()=>{
var userDetails={"email":localStorage.getItem("email"),"password":opassword}
axios.post(_userapiurl+"login",userDetails).then((response)=>{
    if(npassword==cnpassword)
    {
        let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}}
          axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            alert("Password Changed Successfully,Please log again...")
           navigate("/logout");
          })
    }
    else
    {
        setOutput("New & confirm new password mismatch")
        setNewPassword("")
        setConfirmNewPassword("")
    }
    //var users=response.data.userDetails;
//alert(users);
}).catch((err)=>{
   setOutput("Invalid old Password")
   setOldPassword("")
})

    }

    return(<>
 

<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
            
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                <br/> <br/> <br/>
                    <h5 class="section-title bg-white text-start text-primary pe-3">Welcome To</h5>
                    <br/> 
                    <h1 class="mb-4"> <span class="text-danger">CHANGE PASSWORD HERE !!!</span></h1>
                    <form>
            <div class="row g-5">
                
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                <h4 class=" bg-white text-start text-success pe-3"  >{output}</h4>  <br/>
                
             
                                <br />
                                <div class="form-group">
                                    <label for="olpassword">Old Password:</label>
                                    <input type="password" class="form-control" value={opassword} onChange={e=>setOldPassword(e.target.value)}   />
                                </div>
                                <br />
                                <br />
                                <div class="form-group">
                                    <label for="nwpassword">New Password:</label>
                                    <input type="password" class="form-control" value={npassword} onChange={e=>setNewPassword(e.target.value)}   />
                                </div>
                                <br />
                                 <br />
                                <div class="form-group">
                                    <label for="cnpassword">Confirm New Password:</label>
                                    <input type="password" class="form-control" value={cnpassword} onChange={e=>setConfirmNewPassword(e.target.value)}   />
                                </div>
                                <br />
                                
  <button type="button" onClick={handleSubmit} class="btn btn-danger">Submit</button>
   
                </div>
            </div>
            </form>
                    
                    
                </div>
            </div>
        </div>
    </div>
   
    </>);

}
export default CPUser;