import './Viewsubcategory.css';
import axios from 'axios';
import { _subcategoryapiurl } from '../../api_url';
import { useState,useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';

function Viewsubcategory(){
    const params=useParams()
    const [scList,setSubCatList]=useState([])
    useEffect(()=>{
        axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
            setSubCatList(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    })
    return(<>

<br/><br/><br/><br/>
<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                    
                    <h1 class="mb-4 text-uppercase">Sub Category <span class="text-primary">List &gt;&gt;{params.catnm}</span></h1>
                    <center>
                    <div id="category_main" >
                                    {
                                        scList.map((row) => (
                                            <Link to={`/viewproduct/${row.subcatnm}`}>
                                    <div class="category_part">  
                                    <img src={`../assets/uploads/subcaticon/${row.subcaticonnm}`} alt="cat" height="100" width="150"/>
                                    <br/>
                                    <b>{row.subcatnm}</b>
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
    
    </>);

}
export default Viewsubcategory;