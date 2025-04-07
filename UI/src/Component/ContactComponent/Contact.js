import './Contact.css';

function Contact(){

    return(
        <>
        <div id="contact">
 {/* About Start */}
 <br/><br/><br/><br/>
 <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{"object-fit": "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">Contact Page</h6>
                    <h1 class="mb-4">Welcome Contact Page  <span class="text-primary">To Find The Perfect Property</span></h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row gy-2 gx-4 mb-4">
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
        </div>
        
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <h4 className='text-success'>Contact Us</h4>
Our mailing address:
property@gmail.com<br/>
Echelon Square, Plot 25,
Sector 32,   vijay Nagar -122001
Indore, India
<br/>
In case of any queries:<br/>
1800-313-1256
support@property.com<br/>
Or Chat With us</div></div></div>

        </>
    );
}

export default Contact;