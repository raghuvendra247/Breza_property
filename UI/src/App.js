
import './App.css';
import { Route , Routes } from 'react-router-dom';

import Header from './Component/HeaderComponent/Header';
import Nav from './Component/NavComponent/Nav';

import Content from './Component/ContentComponent/Content';

import About from './Component/AboutComponent/About';
import Contact from './Component/ContactComponent/Contact';
import Service from './Component/ServiceComponent/Service';
import Register from './Component/RegisterComponent/Register';
import Login from './Component/LoginComponent/Login';
import Logout from './Component/LogoutComponent/Logout';
import Footer from './Component/FooterComponent/Footer';
import Adminhome from './Component/AdminhomeComponent/Adminhome';
import Manageusers from './Component/ManageusersComponent/Manageusers';
import Userhome from './Component/UserhomeComponent/Userhome';
import CPUser from './Component/CPUserComponent/CPUser';
import EPUser from './Component/EPUserComponent -/EPUser';
import Viewcategory from './Component/ViewcategoryComponent/Viewcategory';
import Viewsubcategory from './Component/ViewsubcategoryComponent/Viewsubcategory';
import AddCategory from './Component/AddCategoryComponent/AddCategory';
import AddSubCategory from './Component/AddSubCategoryComponent/AddSubCategory';
import AddProperty from './Component/AddPropertyComponent/AddProperty';
import Verifyuser from './Component/VerifyuserComponent/Verifyuser';
import Email from './Component/Email_contactComponent/Email';
import Privacy from './Component/PolicyComponent/Privacy';
import Term from './Component/PolicyComponent/Term';

function App() {
  return (
    <>
    
  <Header />
    <Nav/>
    
<Routes>
    <Route path='' element={<Content/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/verifyuser/:vemail' element={<Verifyuser/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/logout' element={<Logout/>}> </Route>
    <Route path='/admin' element={<Adminhome/>}></Route>
    <Route path='/manageusers' element={<Manageusers/>}></Route>
    <Route path='/addcategory' element={<AddCategory/>}></Route>
    <Route path='/addsubcategory' element={<AddSubCategory/>}></Route>
    <Route path='/addproperty' element={<AddProperty/>}></Route>
    <Route path='/user' element={<Userhome/>}></Route>
    <Route path='/viewcategory' element={<Viewcategory/>}></Route>
    <Route path='/viewsubcategory/:catnm' element={<Viewsubcategory/>}></Route>
    <Route path='/cpuser' element={<CPUser/>}></Route>
    <Route path='/epuser' element={<EPUser/>}></Route>
    <Route path='/email' element={<Email/>}></Route>
   <Route path='/privacy' element={<Privacy/>}></Route>
   <Route path='/term' element={<Term/>}></Route>
  </Routes>       
     
 <Footer/>
 

    
    </>
  );
}

export default App;
