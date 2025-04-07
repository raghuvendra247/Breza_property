import './EPUser.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';

function EPUser() {
    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [gender, setGender] = useState()



    useEffect(() => {
        axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email")).then((response) => {
            var user_info = response.data[0];
            setName(user_info.name);
            setEmail(user_info.email);
            setMobile(user_info.mobile)
            setAddress(user_info.address)
            setCity(user_info.city);
            // setGender(user_info.gender)
            //alert(response.data[0].email)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleSubmit = () => {

        let updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city, "gender": gender } }
        axios.patch(_userapiurl + "update", updateDetails).then((response) => {
            alert("Profile edited successfully...")

        })
    }

    return (<>



        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">

                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                        <br /> <br /><br />
                        <h5 class="section-title bg-white text-start text-primary pe-3">Welcome To</h5>
                        <br />
                        <h1 class="mb-4"> <span class="text-danger">Edit Profile Here !!!</span></h1>
                        <form >
                            <h4 class=" bg-white text-start text-success pe-3"  >{output}</h4>  <br />

                            <div class="form-group">

                                <label for="Name">Name :</label>
                                <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />

                            </div>
                            <br />
                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input type="text" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <br />


                            <div class="form-group">
                                <label for="Mobile">Mobile :</label>
                                <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="Address">Address :</label>
                                <textarea class="form-control" rows="5" value={address} onChange={e => setAddress(e.target.value)}> </textarea>
                            </div>
                            <br />

                            <div class="form-group">
                                <label for="city">City :</label>
                                <select class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                                    <option>Select City</option>
                                    <option>Indore</option>
                                    <option selected>Bhopal</option>
                                    <option>Jabalpur</option>
                                </select>
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="gender">Gender :</label>
                                male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}/>&nbsp;&nbsp;

                                Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
                            </div>
                            <br />

                            <br />
                            <button type="button" class="btn btn-danger" onClick={handleSubmit}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </>);

}
export default EPUser;