import './Manageusers.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';

function Manageusers(){

    const navigate=useNavigate()

    const [userDetails,setUserDetails]=useState([]);
    useEffect(()=>{
        axios.get(_userapiurl+"fetch?role=user").then((response)=>{
      setUserDetails(response.data)

        }).catch((err)=>{
     console.log(err)
        })
    })

    const manageusersstatus=(_id,s)=>{
      //alert(_id+"-----"+s);
        if(s=="verify")
        {
         
          let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}
          axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
           navigate("/manageusers");
          })
        }
        else if(s=="block")
        {
            let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}
          axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
           navigate("/manageusers");
          })
        }
        else{
            let deleteDetails={"data":{"_id":_id}};
            axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
             //navigate("/manageusers");
            
        })}

    }

    return(
        <>
        <div id="contact">
 {/* About Start */}
 <br/><br/><br/><br/>
 <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                   
                    <h1 class="mb-4">View &  <span class="text-primary">Manage Users Here!!!</span></h1>
                  <table class="table table-bordered">
                    <tr>
                        <th>User ID </th>
                        <th>Name </th>
                        <th>Email</th>
                        <th>Mobile </th>
                        <th>address </th>
                        <th>City </th>
                        <th>Gender </th>
                        <th>Info </th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                    userDetails.map((row)=>(
                      <tr>
                        <td>{row._id}</td>
                        <td>{row.name }</td>
                        <td>{row.email }</td>
                        <td>{row.mobile }</td>
                        <td>{row.address}</td>
                        <td>{row.city }</td>
                        <td>{row.gender }</td>
                        <td>{row.info }</td>
                        <td>
    { row.status==1 && <font color='green'>Verified</font>}
    { row.status==0 && <font color='orange'>Blocked</font>}  
    </td>
    <td>
    { row.status==1 && <font onClick={() =>  manageusersstatus(row._id,"block") }  color='blue'>ChangeStatus</font> }
    { row.status==0 && <font onClick={() =>  manageusersstatus(row._id,"verify") }  color='blue'>ChangeStatus</font> }
    <br/>
    <font onClick={() =>  manageusersstatus(row._id,"delete") } color='red'>Delete</font>
    
    </td>

                      </tr>
                    ))
}
                  </table>
                   
                    <div class="row gy-2 gx-4 mb-4">
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
        </div>
        
        </>
    );
}

export default Manageusers;