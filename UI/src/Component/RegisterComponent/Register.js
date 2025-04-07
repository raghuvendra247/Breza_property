
import './Register.css';
import axios from 'axios';
import { useState } from 'react';
import { _userapiurl } from '../../api_url';


function Register() {

    const [output,setOutput]=useState();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [mobile,setMobile]=useState();
    const [address,setAddress]=useState();
    const [city,setCity]=useState();
    const [gender,setGender]=useState();

    const handleSubmit=()=>{
       
        var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
        axios.post(_userapiurl+"save",userDetails).then((response)=>{
          setOutput("User register successfully....");  
          setName("");
          setEmail("");
          setPassword("");
          setMobile("");
          setAddress("");
          setCity("");
        }).catch((err)=>{
          console.log(err); 
          setOutput("invalid user");   
        });  
    };
    return (<>
        
        <div id="register">
            {/* About Start */}
            <br/><br/><br/><br/>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                       

                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                            <h4 class="section-title bg-white text-start text-primary pe-3"  >REGISTER HERE!!!</h4>
                            <br/><br/>
                           <font color="blue">{output}</font>

                            <form >
                                <div class="form-group">
                                    
                                    <label for="Name">Name :</label>
                                    <input type="text" class="form-control" value={name}  onChange={e=>setName(e.target.value)} />
                                    {/*{name}*/}
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="text" class="form-control" value={email}  onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="pwd">Password:</label>
                                    <input type="password" class="form-control" id="pwd" value={password}  onChange={e=>setPassword(e.target.value)}/>
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="Mobile">Mobile :</label>
                                    <input type="text" class="form-control" value={mobile}  onChange={e=>setMobile(e.target.value)}/>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Address">Address :</label>
                                    <textarea class="form-control" rows="5" value={address}  onChange={e=>setAddress(e.target.value)}> </textarea>
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="city">City :</label>
                                    <select class="form-control" value={city}  onChange={e=>setCity(e.target.value)}>
                                        <option selected>Select City</option>
                                        <option>Indore</option>
                                        <option >Bhopal</option>
                                        <option>Jabalpur</option>
                                    </select>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="gender">Gender :</label>
                                    male <input type="radio" name="gender" value="male"   onChange={e=>setGender(e.target.value)}/>&nbsp;&nbsp;
 
                                    Female <input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)} />
                                </div>
                                <br />

                                <br />
                                <button type="button" class="btn btn-danger" onClick={handleSubmit}>Submit</button>
                            </form>
                          
                            <div class="row gy-2 gx-4 mb-4">

                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </div>
    </>);
}
export default Register;