import './Nav.css';


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {

    const [NavContent, setNavContent] = useState();

    useEffect(() => {
        if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == 'admin')
            setNavContent(<><div class="container-fluid position-relative p-0">


                <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">

                    <h1 class="text-primary m-0"><i class="fa  me-3"></i>Breza Property </h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                    {/* </a>   */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a   ><Link to="/admin" class="nav-item nav-link active">Admin Home</Link> </a>
                            <a   ><Link to="/manageusers" class="nav-item nav-link ">Manage Users</Link> </a>

                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item" ><Link to="/addcategory">Add Category</Link></a>

                                    <a class="dropdown-item" ><Link to="/addsubcategory">Add SubCategory</Link></a>


                                </div>
                            </div>
                            <a   ><Link to="/addproperty" class="nav-item nav-link ">Add Property</Link> </a>

                        </div>
                        <a  ><Link to="/logout" class="btn btn-danger rounded-pill py-2 px-4" >Logout</Link></a>
                    </div>
                </nav>


            </div></>);
        else if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == 'user')
            setNavContent(<><div class="container-fluid position-relative p-0">


                <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">

                    <h1 class="text-primary m-0"><i class="fa  me-3"></i>Breza Property </h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                    {/* </a>   */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active" ><Link to="/user">User Home</Link> </a>
                            <a class="nav-item nav-link " ><Link to="/viewcategory">Search Property</Link> </a>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Setting</a>
                                <div class="dropdown-menu m-0">
                                    <Link to="/cpuser" class="dropdown-item">Change Password</Link>

                                    <Link to="/epuser" class="dropdown-item">Edit Profile</Link>


                                </div>
                            </div>
                            
                        </div>
                        <a class="btn btn-primary text-danger rounded-pill py-2 px-4" ><Link to="/logout">Logout</Link></a>
                    </div>
                </nav>


            </div></>);
        else
            setNavContent(<>
            
            <div class="container-fluid position-relative p-0">


                <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">

                    <h1 class="text-primary m-0"><i class="fa  me-3"></i>Breza Property </h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                    {/* </a>   */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a   ><Link to="" class="nav-item nav-link active">Home</Link> </a>
                            <a  ><Link to="/about" class="nav-item nav-link ">About</Link></a>
                            <a  ><Link to="/contact" class="nav-item nav-link">Contact</Link></a>
                            <a  ><Link to="/service" class="nav-item nav-link">Service</Link></a>

                           
                            <a  ><Link to="/register" class="nav-item nav-link">Register</Link></a>
                        </div>
                        <a  ><Link to="/login" class="btn btn-primary rounded-pill py-2 px-4">Login</Link></a>
                    </div>
                </nav>


            </div>
            <br/><br/><br/><br/></>);
    })
    return (
        <>
            <div id="nav">
                {/* Navbar & Hero Start */}
                <br /><br />
                {NavContent}




            </div>
            {/* Navbar & Hero End */}
        </>
    );
}
export default Nav;