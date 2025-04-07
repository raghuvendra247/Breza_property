
import './Banner.css';
import { useState,useEffect } from 'react';

function Banner() {
 const [BannerContent,setBannerContent]=useState();

 useEffect(()=>{
    if(localStorage.getItem('token')!=undefined)
    setBannerContent(<></>)
    else
    setBannerContent(<> <div class="container-fluid bg-primary py-5 mb-5 hero-header">
    <div class="container py-5">
        <div class="row justify-content-center  py-5">
            <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center ">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Find A Perfect Home To Live With Your Family</h1>
                <p class="fs-4 text-white mb-4 animated slideInDown">Search for best property option as per requrement                       </p>
               
            </div>
        </div>
    </div>
</div>
</>)
 })

  return (
    <>
    
   {BannerContent}

    
     

    </>
  );
}

export default Banner;
