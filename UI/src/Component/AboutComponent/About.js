import axios from 'axios';
import './About.css';
import { useState,useEffect } from 'react';
function About(){

    const [pDetails,setPostDetails]=useState([])
    
    //const [count,setCount]=useState(0);

    useEffect(()=>{
     var apiurl="https://jsonplaceholder.typicode.com/posts "
     axios.get(apiurl).then((response)=>{
        //console.log(response.data);
        setPostDetails(response.data);
     }).catch((error)=>{
        console.log(error);
     });

       //setCount(count+1);
    });

    return(
        <>
        <div id="about">
            <br/><br/><br/>
       {/* About Start */}
       <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{"object-fit": "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    {/*<h2>count={count}</h2>*/}
                    <h1 class="mb-4">Welcome About Page  <span class="text-primary">To Find The Perfect Property</span></h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <table class="table table-bordered">
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        {
                        pDetails.map((row)=>(
                            <tr>
                                <td>{row.userId}</td>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
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

export default About;