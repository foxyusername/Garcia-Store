import { useEffect } from "react";
import "../css/Welcome.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Welcome(){
    
  const [shoedata,setshoedata]=useState([]);
const [shirtdata,setshirtdata]=useState([]);
const [hatdata,sethatsdata]=useState([]);

  useEffect(()=>{
async function getshoes(){
  let shoedata= await fetch('https://api.unsplash.com/search/photos?query=shoes&per_page=14&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4');
  let shoejson=await shoedata.json()
  setshoedata(shoejson.results);
}
getshoes();

async function getshirt(){
  let shirtdata= await fetch('https://api.unsplash.com/search/photos?query=Hoodies&per_page=14&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4')
  let shirtjson=await shirtdata.json()
  setshirtdata(shirtjson.results);
}
getshirt();
async function gethats(){
  let hatdata= await fetch('https://api.unsplash.com/search/photos?query=Hats&per_page=14&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4')
  let hatjson=await hatdata.json()
  sethatsdata(hatjson.results);
}
gethats();

  },[]);

const navigate=useNavigate();

    return <div>
   <div className="Welcome-main_div">
    <div className="welcome-description">
      
         <div id="welcome-heading">
              <h1>Products</h1>
    </div>
     
    <div id="welcome-body">             
     <label>𝚜𝚑𝚘𝚎𝚜</label> 
   <div className="section-images">
{shoedata.map((result,index)=>{
  return  <img className="shoes-image" src={shoedata[index].urls.regular} />
})}
  </div>
  <label>Shirts</label>
  <div className="section-images">
    {shirtdata.map((result,index)=>{
      return <img className="shoes-image" src={shirtdata[index].urls.regular} />
    })}
    </div>
    <label>Hats</label>
    <div className="section-images">
      {hatdata.map((reuslt,index)=>{
        return <img className="shoes-image" src={hatdata[index].urls.regular} />
      })}
    </div>
      </div>
    </div>
    </div>
<div className="welcometext">
<div id="p_tags"><p>ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ɢᴀʀᴄɪᴀꜱᴛᴏʀᴇ ᴡʜᴇʀᴇ ʏᴏᴜ'ʟʟ ꜰɪɴᴅ ᴛʜᴇ ᴘᴇʀꜰᴇᴄᴛ ᴏᴜᴛꜰɪᴛ ꜰᴏʀ ᴀɴʏ ᴏᴄᴄᴀꜱɪᴏɴ!<br></br>ᴡᴇ ꜱᴘᴇᴄɪᴀʟɪᴢᴇ ɪɴ ᴘʀᴏᴠɪᴅɪɴɢ ꜱᴛʏʟɪꜱʜ ᴀɴᴅ ʜɪɢʜ-Qᴜᴀʟɪᴛʏ ᴄʟᴏᴛʜɪɴɢ</p></div>
    <div id="buttons">
      <button type="button" onClick={()=>{navigate('/login')}}>Log in</button>
      <button type="button" onClick={()=>{navigate('/register')}}>Sign up</button>
    </div>
</div>
    </div>
}