import axios from 'axios';
import './AddProperty.css';
import { useEffect, useState } from 'react';
import { _categoryapiurl,_subcategoryapiurl } from '../../api_url';

function AddProperty() {
    const [title,setTitle]=useState()
    const [catnm,setCategory]=useState()
    const [subcatnm,setSubCategory]=useState()
    const [pdescription,setPropertyDescription]=useState()
    const [paddress,setPropertyAddress]=useState()
    const [price,setPrice]=useState()
    const [output,setOutput]=useState()
    const [file,setFile]=useState()
    const [cList,setCatList]=useState([])
    const [sList,setSubCatList]=useState([])

    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }
      useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((response)=>{
            setCatList(response.data);
        }).catch((err)=>{
            console.log(err);
        })
      })
      const fetchSubCategory=(catnm)=>{
        setCategory(catnm);
        axios.get(_subcategoryapiurl+"fetch?catnm="+catnm).then((response)=>{
            setSubCatList(response.data);
        }).catch((err)=>{
            console.log(err);
            //setSubCatList([])
        })
      }
    const handleSubmit=()=>{
      
    }

    return (
        <>
            <div id="contact">
                {/* About Start */}
                <br /><br /><br /><br />
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5">

                            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">

                                <h1 class="mb-4 text-uppercase">Add Property <span class="text-primary">Here!!!</span></h1>
                                <font color="blue">{output}</font>

                                <form >
                                    <div class="form-group">

                                        <label for="title">Title :</label>
                                        <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                       
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="category">Category :</label>
                                        <select class="form-control"  onChange={e =>fetchSubCategory(e.target.value)}>
                                            <option>Select Category</option>
                                            {
                                                cList.map((row)=>(
                                                   <option>{row.catnm}</option> 
                                                ))
                                            }   
                                        </select>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="subcategory">Sub Category :</label>
                                        <select class="form-control" value={subcatnm} onChange={e => setSubCategory(e.target.value)}>
                                            <option>Select Sub Category</option>
                                            {
                                                sList.map((row)=>(
                                                   <option>{row.subcatnm}</option> 
                                                ))
                                            }      
                                        </select>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="pdescription">Property Description :</label>
                                        <textarea class="form-control" rows="5" value={pdescription} onChange={e => setPropertyDescription(e.target.value)}> </textarea>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="paddress">Property Address :</label>
                                        <textarea class="form-control" rows="5" value={paddress} onChange={e => setPropertyAddress(e.target.value)}> </textarea>
                                    </div>
                                    <br />
                                    <div class="form-group">

                                        <label for="ppprice">Price :</label>
                                        <input type="text" class="form-control" value={price} onChange={e => setPrice(e.target.value)} />
                                        {/*{name}*/}
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="file">Property Icon:</label>
                                        <input type="file" class="form-control" onChange={handleChange} />
                                    </div>
                                    <br />
                                    
                                    <button type="button" class="btn btn-danger" onClick={handleSubmit}>Submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
            </div>

        </>
    );
}

export default AddProperty;