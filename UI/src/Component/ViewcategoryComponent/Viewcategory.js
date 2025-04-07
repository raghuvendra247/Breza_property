import './Viewcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../../api_url';
import { Link } from 'react-router-dom'

function Viewcategory() {
    const [cList, setCatList] = useState([])

    useEffect(() => {
        axios.get(_categoryapiurl + "fetch").then((response) => {
            setCatList(response.data);

        }).catch((err) => {
            console.log(err);
        })
    })




    return (<>
        <div id="service">
            {/* About Start */}
            <br /><br /><br /><br />
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">

                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">

                            <h1 class="mb-4 text-uppercase"> Category <span class="text-primary">List &gt;</span></h1>
                            <center>
                                <div id="category_main" >
                                    {
                                        cList.map((row) => (
                                            <Link to={`/viewsubcategory/${row.catnm}`}>
                                    <div class="category_part">  
                                    <img src={`assets/uploads/caticon/${row.caticonnm}`} height="100" width="150"/>
                                    <br/>
                                    <b>{row.catnm}</b>
                                    </div>
                                    </Link>
                                        ))
                                    }
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </div>
    </>);

}
export default Viewcategory;