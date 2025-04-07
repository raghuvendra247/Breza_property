import './Footer.css';
import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { _userapiurl } from '../../api_url';

function Footer(){
    const navigate=useNavigate()
const [FooterContent,setFooterContent]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [output,setOutput]=useState()
const handleSubmit=()=>{
    if(email==undefined||password==undefined)
        {
         alert("invalid details or not verified user"); 
        }
        else
        {
    const details={"email":email,"password":password}
    axios.post(_userapiurl+"login",details).then((response)=>{
        setEmail("")
        setPassword("")
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
        console.log(err)
            alert("Somthin Wrong")


    });
}
}

useEffect(()=>{
    if(localStorage.getItem('token')!=undefined)
    setFooterContent(<> </>)
    else
    setFooterContent(<>  {/* Footer Start */}
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Company</h4>
                        <a class="btn btn-link" href="">About Us</a>
                       
                        <Link to='/email'>  <a class="btn btn-link" >Contact Us</a> </Link>
                        <Link to='/privacy'> <a class="btn btn-link" >Privacy Policy</a>
                       </Link>
                        
                        <Link to='/term'><a class="btn btn-link" >Terms & Condition</a></Link>
                        <a class="btn btn-link" href="">FAQs & Help</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, Indore, India</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+918567432598</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Gallery</h4>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/ist.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/dream.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/package-3.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/package-2.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/package-3.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light p-1" src="img/package-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-3">Newsletter</h4>
                        <p>Signin to this site to make your dream true</p>
                        <div class="position-relative mx-auto" style={{"max-width": "400px"}}>
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your password"value={password} onChange={e=>setPassword(e.target.value)}/>
                            <button type="button" class="btn btn-primary py-2  top-0 end-0 mt-2 me-2" onClick={handleSubmit}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        {/* Footer End */}
    
    
       
        </>)
})
    return(
        <>
{FooterContent}

        <div id="">
        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Property Finder</a>, All Right Reserved.
    
                            {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                            Designed By <a class="border-bottom" href="https://htmlcodex.com">MERN STACK</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                               
                                <Link to='/email'> Help</Link>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
 {/* Back to Top */}
 <a href=" " class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    
      
        </div>
        </>
    );
}
export default Footer;