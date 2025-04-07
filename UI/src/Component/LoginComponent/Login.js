import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';


function Login(){
     
    const navigate = useNavigate();
    const [output,setOutput]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    var handleSubmit=()=>{
       if(email==undefined||password==undefined)
       {
        setOutput("invalid details or not verified user"); 
       }
       else
       {
        var userDetails={"email":email,"password":password};
        axios.post(_userapiurl+"login",userDetails).then((response)=>{
            // console.log(response);
           
            var users=response.data.userDetails;
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("_id",users._id);
            localStorage.setItem("name",users.name);
             localStorage.setItem("email",users.email);
            // localStorage.setItem("password",users.password);
            localStorage.setItem("address",users.address)
            localStorage.setItem("city",users.city);
            localStorage.setItem("gender",users.gender);
            localStorage.setItem("role",users.role);
            localStorage.setItem("info",users.info);


           
           
            //users.role=="admin"?alert("admin"):alert("user");
            (users.role=="admin")?navigate("/admin"):navigate("/user");
           
            console.log(users)
            setOutput("login successfully");
        }).catch((err)=>{
            setOutput("invalid details or not verified user"); 
            setEmail(" ")
            setPassword("");

        });
    }  
        
    };


    return(<>
    {/* <div id="login"> */}
{/* About Start */}
{/* <br/><br/><br/> */}
<div class="container py-5 mt-5 mb-5">
        <div class="container">
            <form>
            <div class="row g-5">
                
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                <h4 class=" bg-white text-start text-success pe-3"  >{output}</h4>  <br/>
                
                <h4 class="section-title bg-white text-start text-primary pe-3"  >Login HERE!!!</h4>
                <div class="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="text" class="form-control"  value={email} onChange={e=>setEmail(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}   />
                                </div>
                                <br />
                                <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-danger">Submit</button>

                    
                    
                   
                </div>
            </div>
            </form>
        </div>
    </div> 
    {/* About End */}
    {/* </div> */}
    </>);
}
export default Login;