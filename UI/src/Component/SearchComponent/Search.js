import './Search.css';

function Search(){
    return(
        <>


      {/* Search Start */}
<div class="container-fluid bg-success mb-5 wow fadeIn" data-wow-delay="0.1s" style={{"padding": "35px"}}>
    <div class="container">
        <div class="row g-2">
            <div class="col-md-10">
                <div class="row g-2">
                    <div class="col-md-4">
                        <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword"/>
                    </div>
                    <div class="col-md-4">
                        <select class="form-select border-0 py-3">
                            <option selected>Property Type</option>
                            <option value="1">For Home</option>
                            <option value="2">For School</option>
                            <option value="3">For Business</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select class="form-select border-0 py-3">
                            <option selected>Location</option>
                            <option value="1">Indore</option>
                            <option value="2">Bhopal</option>
                            <option value="3">Jabalpur</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-dark border-0 w-100 py-3">Search</button>
            </div>
        </div>
    </div>
</div>
{/*Search End */}
   

        </>
    );
}
export default Search;