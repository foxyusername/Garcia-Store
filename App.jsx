import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {Login} from "./components/Login";
import "./css/app.css";
import { Register } from './components/Register';
import { useState } from 'react';
import {Home} from "./components/Home";
import HomeRouter from './middleware/Router';
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Welcome from './components/Welcome';
import Error from './components/Error';
import About from "./components/About";

function App(){
const [state,setstate]=useState();
const [register_state,set_register_state]=useState();
const [password,setpassword]=useState('');
 const [email,setemail]=useState('');
 const [username,setusername]=useState('');
 const [register_email,set_register_email]=useState('');
 const [register_password,set_register_password]=useState('');


 const [cart1,setcard1]=useState(false);
 const [cart2,setcard2]=useState(false);
 const [cart3,setcard3]=useState(false);
 const [cart4,setcard4]=useState(false);
 const [cart5,setcard5]=useState(false);
 const [cart6,setcard6]=useState(false);
 const [cart7,setcard7]=useState(false);
 const [cart8,setcard8]=useState(false);
 const [cart9,setcard9]=useState(false);
 const [cart10,setcard10]=useState(false);

 const [cart11,setcard11]=useState(false);
 const [cart12,setcard12]=useState(false);
 const [cart13,setcard13]=useState(false);
 const [cart14,setcard14]=useState(false);
 const [cart15,setcard15]=useState(false);
 const [cart16,setcard16]=useState(false);
 const [cart17,setcard17]=useState(false);
 const [cart18,setcard18]=useState(false);
 const [cart19,setcard19]=useState(false);
 const [cart20,setcard20]=useState(false);

function SetState(data){
setstate(data);
}

function getregister_state(data){
  set_register_state(data);
}
function getpassword(password){
 setpassword(password);
} 
function getemail(email){
  setemail(email);
}
function getusername(user){
  setusername(user)
}
function getemail2(email2){
    set_register_email(email2);
}
function getpassword2(password2){
  set_register_password(password2);
}

return <div>
<Router>
    <Routes>
      <Route path='/' element={<Welcome />} />
    <Route element={<HomeRouter state={state} register_state={register_state}/>}>
            <Route element={<Home setcard1={setcard1} setcard2={setcard2} setcard3={setcard3} setcard4={setcard4} setcard5={setcard5} setcard6={setcard6} setcard7={setcard7}
            setcard8={setcard8} setcard9={setcard9} setcard10={setcard10} setcard11={setcard11} setcard12={setcard12} setcard13={setcard13} setcard14={setcard14} setcard15={setcard15} 
            setcard16={setcard16} setcard17={setcard17} setcard18={setcard18} setcard19={setcard19} setcard20={setcard20} 
            />} path='/home' exact />
         
          <Route path='/cart' element={<Cart cart1={cart1} cart2={cart2} cart3={cart3} cart4={cart4} cart5={cart5} cart6={cart6} cart7={cart7} cart8={cart8} cart9={cart9} cart10={cart10}
                                            cart11={cart11} cart12={cart12} cart13={cart13} cart14={cart14} cart15={cart15} cart16={cart16} cart17={cart17} cart18={cart18} cart19={cart19} cart20={cart20}
                              />} exact />
         
          <Route path='/profile' element={<Profile email={email} password={password} register_email={register_email} register_password={register_password} register_username={username} />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/about' element={<About />} />
            </Route>
        
        <Route path="/login" element={<Login setstate={SetState} getdata={getpassword} getdata2={getemail}/>}></Route>
        <Route path="/Register" element={<Register registerState={getregister_state} getusername={getusername} getpassword={getpassword2} getemail={getemail2}/>}></Route>
   <Route path='*' element={<Error />} />
    </Routes>
</Router>
</div>
}

export default App;