import { useState } from "react";
import "../css/Profile.css";
import axios from'axios';
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
export default function Profile ({email,password,register_email,register_password,register_username}){

    const [state,setstate]=useState(false);
   const [content,setcontent]=useState('');
  const [vision,setvision]=useState(false);
  const [info,setinfo]=useState(false);
  const [username,setusername]=useState('');
  const [show,setshow]=useState('');
  const [vision2,setvision2]=useState(false);
  const [imagefile,setfile]=useState();
  const [url,seturl]=useState();
  const [changer,setchanger]=useState(false);
  const [profile,setprofile]=useState(true);
function click(){
    if(state){
setstate(false)
    }else{
        setstate(true);
        setvision(false);
    }

if(state && content.length>0){
   setstate(false);
   setvision(true);
}
if(!state && content.length>0){
  setcontent('');
}
}
function inputvalue (e){
    setcontent(e.target.value);
    
}
function labelclick(){
    setstate(false);
    setcontent('');
}
function clicker(){
  if(info){
    setinfo(false);
  }else{
    setinfo(true);
  }
}

function showcomponents(){
   if(show){
  setshow(false);
   }else{
      setshow(true);
}
}

useEffect(()=>{
axios.post('http://localhost:3000/search',{
  user_email: email,
  user_password : password
  }).then((response)=>setusername(response.data[0].username))
  .catch((err)=>console.log(err));
},[]);

const history=useNavigate();

function logout(){
  history('/login');
}
function Pclick(){
  if(vision2){
    setvision2(false);
  }else{
  setvision2(true);
}
setstate(false);
}


function handlefile(e){
  setfile(e.target.files[0]);
}


useEffect(()=>{
axios.post('http://localhost:3000/getphoto',{
  profile_email: email,
  register_email : register_email
}).then((res)=>{
  seturl(res.data[0].image);
})
.catch((err)=>console.log(err))

},[profile])



function handleupload(){
  let formdata=new FormData();
formdata.append('picture',imagefile);
formdata.append('user_email',email);
formdata.append('users_password',password);
formdata.append('register_email',register_email);
if(profile && imagefile){
  axios.post('http://localhost:3000/add',formdata)
  .then((res) =>console.log('uploaded'))
  .catch((err) => console.log(err));
  setprofile(false);
  setfile('');
}
if(setprofile===false){

axios.post('http://localhost:3000/getphoto',{
  profile_email: email,
  register_email : register_email
}).then((res)=>{
  seturl(res.data[0].image);
})
.catch((err)=>console.log(err))
}
}
function handleclick(){
  if(changer){
    setchanger(false);
   setprofile(true);
  
  }else{
    setchanger(true);
}
}

return <div>
  <div className="profile-container">
     <div className="profile-div" data-aos="fade-out">
     <div className="profile-div-baseline"><h1>ℙ𝕣𝕠𝕗𝕚𝕝𝕖</h1></div>    
       <button className="info-btn" onClick={clicker} type="button" data-aos="fade-in">Show Info</button>
    <div className="ndComponent">
          <div className="others" onClick={showcomponents} style={{transform:show ? 'rotate(180deg)': null}}>☰</div>
          {show  ?<div className="ndComponentComponents" data-aos="fade-in" data-aos-duration="300">
  <p id="feed" >Settings & feed</p>
  <p id="settings">  Help & support</p>
  <p id="accestbility" >Accessibility</p>
  <p id="feedback">Give Feedback</p>
  <p id="language">Language</p>
  <p id="edit" onClick={Pclick}>{vision2 ? 'Done': '𝘌𝘥𝘪𝘵/𝙱𝚒𝚘'}</p>
  <p id="logout" onClick={logout}>Log Out</p>
</div>
 :null}
    </div>
    {info ? <div className="profile-information">    
      <div className="email"><p className="header-div" data-aos="fade-in">𝙴𝚖𝚊𝚒𝚕 :</p><p className="body-div">{ email ? email : register_email}</p></div>
      <div className="password"><p className="header-div" data-aos="fade-in">𝚙𝚊𝚜𝚜𝚠𝚘𝚛𝚍 :</p><p className="body-div">{password ? password : register_password}</p></div>
     </div>: null}
     <div className="move">
      <div className="image-div">
      <img id="guest" src={url ? "http://localhost:3000/"+url: 'https://avatars.githubusercontent.com/u/112616706?v=4'} style={{filter:changer && "blur(3px)"}}/>
    {changer ? <input type="file" id="photo-upload" data-aos="fade-in" onChange={handlefile}/>:null }
    {changer ? <button id="photo-submit" type="submit" data-aos="fade-in" onClick={handleupload}>{profile ? '↑' : '✔️' }</button>:null}
   <p onClick={handleclick} id="photocamera" style={{transform:changer ? 'scale(0.9)' : "scale(1)"}}>📷</p>
   <div className="username"><p className="header"></p><p className="body-div">{username ? username : register_username}</p></div>
     </div>
     <div className="bio">
  <div className="bio-button">
  {vision2 && <button className="bio_btn" onClick={click} data-aos="fade-up">{!state && content.length>0 ? 'Clear Bio' : 'Add Bio'}</button>}</div>
 {state ? <div className="input_div" data-aos="fade-left"><input type="text" id="input" placeholder="Bio" maxLength={350} onChange={inputvalue} autoComplete="null"/> 
 <label id="close" onClick={labelclick}>X</label></div> :null}
 {vision ?  <div className="bio_text">
   <div className="boxing-bio"> <p>{content}</p></div>
    </div> :null}
     </div>
     </div>
     </div>
  </div>
</div>
}

