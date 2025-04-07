import './AddSubCategory.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { _categoryapiurl,_subcategoryapiurl } from '../../api_url';

function AddSubCategory() {
    
    const [file,setFile]=useState()
    const[output,setOutput]=useState()
    const [catName,setCatName]=useState()
    const [subCatName,setSubCatName]=useState()
    const [cList,setCatList]=useState([])

    useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((response)=>{
         setCatList(response.data)
        }).catch((err)=>{
          console.log(err);
        })
    });
    

    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }
      const handleSubmit=(event)=>{
        //event.preventDefault();  //page refres ko rokne ke liye
        var formData=new FormData();
        formData.append('catnm',catName);
        formData.append('subcatnm',subCatName)
        formData.append('caticon',file)
        const config={
            'content-type':'multipart/form-data'
        };
        axios.post(_subcategoryapiurl+"save",formData,config).then((response)=>{
            setCatName("");
            setSubCatName("")
           
            setOutput("SubCategory Added Successfully....");
        });
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

                                <h1 class="mb-4 text-danger text-uppercase">Add Sub Category <span class="text-success"> Here!!!</span></h1>

                                <font style={{ "color": "blue" }} >{output}</font>
                                <form>
                                    <div class="form-group">
                                        <label for="catnm">Category Name:</label>
                                        <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)} >
                                            <option>Select Category</option>
                                            {
                                                cList.map((row)=>(

                                                 <option>{row.catnm}</option>

                                                ))
                                            }
                                            </select>
                                    </div>
                                   <br/>
                                    <div class="form-group">
                                        <label for="subcatnm">Sub Category Name:</label>
                                        <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="file">Sub Category Icon:</label>
                                        <input type="file" class="form-control" onChange={handleChange} />
                                    </div>
                                    <br />
                                    <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Sub Category</button>
                                </form>

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

export default AddSubCategory;