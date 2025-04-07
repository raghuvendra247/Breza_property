
import { Link } from 'react-router-dom';

function Email(){
    return(<>
    <center><h1>Welcome to the Contact Page By Email</h1></center>
    {/* <center>
        <form action="https://formspree.io/f/mnqekord" method="post">
        <label for="name">Your Name</label>
  <input name="Name" id="name" type="name"/>
  <br/>
  <label for="email">Your Email</label>&nbsp;
  <input name="Email" id="email" type="email"/><br/>
  <label for="message">Your Message:</label>&nbsp;
  <input name="message" id="message" type="message"/><br/>
  <button type="submit">Submit</button>
</form>

        </center> */}

        <section class="vh-100" style={{"background-color": "#9A616D"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{"border-radius": "1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style={{"border-radius": "1rem 0 0 1rem"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form action="https://formspree.io/f/mnqekord" method="post">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">Contact To Us</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{"letter-spacing": "1px"}}>Text Your Message To Us</h5>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="name" name="Name" id="form2Example17" class="form-control form-control-lg"   />
                    <label class="form-label" for="form2Example17">Name:</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email"name="Email" id="form2Example17" class="form-control form-control-lg"   />
                    <label class="form-label" for="form2Example17">Email address:</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="message"name="message" id="form2Example27" class="form-control form-control-lg"  />
                    <label class="form-label"  for="form2Example27">Message</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit" >Submit</button>
                  </div>

                  
                      <Link to="/"style={{"color": "#393f81"}}>Go Tp Home page </Link> 
                 
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>)
}
export default Email;