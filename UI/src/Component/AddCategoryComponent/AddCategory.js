import './AddCategory.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { _categoryapiurl } from '../../api_url'

function AddCategory() {
    
    const [file,setFile]=useState()
    const[output,setOutput]=useState()
    const [catName,setCatName]=useState()
    

    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }
      const handleSubmit=()=>{
        //event.preventDefault();  //page refres ko rokne ke liye
        var formData=new FormData();
        formData.append('catnm',catName);
        formData.append('caticon',file)
        const config={
            'content-type':'multipart/form-data'
        };
        axios.post(_categoryapiurl+"save",formData,config).then((response)=>{
            setCatName("");
            setFile("");
            setOutput("Category Added Successfully....");
        })
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

                                <h1 class="mb-4 text-danger text-uppercase">Add Category <span class="text-success"> Here!!!</span></h1>

                                <font style={{ "color": "blue" }} >{output}</font>
                                <form>
                                    <div class="form-group">
                                        <label for="catnm">Category Name:</label>
                                        <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="file">Category Icon:</label>
                                        <input type="file" class="form-control" onChange={handleChange} />
                                    </div>
                                    <br />
                                    <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
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

export default AddCategory;