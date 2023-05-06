import { useEffect, useState } from 'react';
import '../css/home.css';
import {useNavigate} from 'react-router-dom';
import {Outlet} from "react-router-dom";

export function Home(props){

const [state,setstate]=useState(false);
const [hamburger,sethamburger]=useState(false);
const [cart1,setcart1]=useState(false);
const [cart2,setcart2]=useState(false);
const [cart3,setcart3]=useState(false);
const [cart4,setcart4]=useState(false);
const [cart5,setcart5]=useState(false);
const [cart6,setcart6]=useState(false);
const [cart7,setcart7]=useState(false);
const [cart8,setcart8]=useState(false);
const [cart9,setcart9]=useState(false);
const [cart10,setcart10]=useState(false);
const [cart11,setcart11]=useState(false);
const [cart12,setcart12]=useState(false);
const [cart13,setcart13]=useState(false);
const [cart14,setcart14]=useState(false);
const [cart15,setcart15]=useState(false);
const [cart16,setcart16]=useState(false);
const [cart17,setcart17]=useState(false);
const [cart18,setcart18]=useState(false);
const [cart19,setcart19]=useState(false);
const [cart20,setcart20]=useState(false);
const [data,setdata]=useState([]);

useEffect(()=>{
async function fetchdata(){
  const get=await fetch('');
  const data=await get.json();
 setdata(data);
 
}
fetchdata();
},[])

function setbool(){
  if(state){
     setstate(false)
    }else{
   setstate(true)
  }

    sethamburger(!hamburger);
}
const navigate=useNavigate();
function navigation(){
  navigate('/cart');
}
function navigateprofile(){
  navigate('/profile');
}
function navigateproducts(){
  navigate('/products');
}

useEffect(()=>{
props.setcard1(cart1);
props.setcard2(cart2);
props.setcard3(cart3);
props.setcard4(cart4);
props.setcard5(cart5);
props.setcard6(cart6);
props.setcard7(cart7);
props.setcard8(cart8);
props.setcard9(cart9);
props.setcard10(cart10);
props.setcard11(cart11);
props.setcard12(cart12);
props.setcard13(cart13);
props.setcard14(cart14);
props.setcard15(cart15);
props.setcard16(cart16);
props.setcard17(cart17);
props.setcard18(cart18);
props.setcard19(cart19);
props.setcard20(cart20);
},[cart1,cart2,cart3,cart4,cart5,cart6,cart7,cart8,cart9,cart10,cart11,cart12,cart13,cart14,cart15,cart16,cart17,cart18,cart19,cart20])



 return (
  <div>
   <div className="home-div">
      <div className='banner'>
        <h1 id="banner-name">𝖌𝖆𝖗𝖈𝖎𝖆</h1>
        <div className='banner-items' data-aos="fade-in">
        <div id="banner-itemsh3" onClick={setbool} style={{transform: hamburger ? 'rotate(180deg)' : null}}>☰</div>
       { state ? <div className='p-tags' data-aos="fade-left" data-aos-duration="250">
          <p className='p1' onClick={()=>{navigate('/about')}}>about</p> 
         <p className='p2' onClick={navigation}>cart</p>
          <p className='p3' onClick={navigateproducts}>Products</p>
         <p className='p4' onClick={navigateprofile}>profile</p>
          </div>:null } 
        </div>
      </div>
      <br />
        <h1 id='recomended'>Top rated shoes</h1>
          <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='data:image/jpeg;base64,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'/></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 100$</p>
            <div className='text-div'> 
            <p>𝘣𝘭𝘢𝘤𝘬 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘥𝘰𝘵𝘴</p>
           <p className="cart" onClick={()=>{!cart1 ? setcart1(true) : setcart1(false)}}>{cart1 ? '✔️' : '🛒' }</p></div>
          </div>
          <div className='element1' data-aos="fade-in" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://media.istockphoto.com/id/1208683466/photo/colorful-sport-shoes-on-mustard-color-backround.jpg?s=170667a&w=0&k=20&c=v6CI1ayYNRDmX-CcKlYv3wunL0bGlKcIkVGikvSsS4M=' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 90$</p>
            <div className='text-div'> 
            <p>𝘳𝘦𝘥 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘣𝘰𝘵𝘵𝘰𝘮</p>
           <p className="red-cart" onClick={()=>{!cart2 ? setcart2(true) : setcart2(false)}}>{cart2 ? '✔️' : '🛒' }</p></div>
          </div>
          <div className='element1' data-aos="fade-right" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://www.brilliantledshoes.com/image/cache/catalog/Women/brilliantledshoes-WLR122/Black-High-Top-LED-Light-Up-Shoes-for-Women-2-550x550.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 200$</p>
            <div className='text-div'> 
            <p>𝘣𝘭𝘢𝘤𝘬 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘣𝘭𝘶𝘦 𝘯𝘦𝘰𝘯</p>
           <p id="neon-cart" onClick={()=>{!cart3 ? setcart3(true) : setcart3(false)}}>{cart3 ? '✔️' : '🛒' }</p></div>
          </div>
          <div className='element1' data-aos="fade-right" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://rukminim1.flixcart.com/image/832/832/ky7lci80/shoe/q/2/r/6-wn-06-6-sachnick-white-and-neon-original-imagagfnwgchubnn.jpeg?q=70' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 150$</p>
            <div className='text-div'> 
            <p>𝘸𝘩𝘪𝘵𝘦 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘨𝘳𝘦𝘦𝘯 𝘤𝘰𝘭𝘰𝘳</p>
           <p className="non-cart" onClick={()=>{!cart4 ? setcart4(true) : setcart4(false)}}>{cart4 ? '✔️' : '🛒' }</p></div>
          </div>
          <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://encrypted-tbn0.gstatic.com/D?q=tbn:ANd9GcTUHMjwTGPGTlKiBNL2BTCK1IzcN7CXhkUtgg&usqp=CAU' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 60$</p>
            <div className='text-div'> 
            <p>𝘨𝘳𝘦𝘦𝘯 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘪𝘤𝘰𝘯𝘴 </p>
           <p className="non-cart" onClick={()=>{!cart5 ? setcart5(true) : setcart5(false)}}>{cart5 ? '✔️' : '🛒' }</p></div>
          </div>
      <h1 id="top-rated-outfits"style={{color:'white',position:'absolute'}}>Top rated shirts</h1>

      <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div"  data-aos="fade-in"><img id='image' src='https://img.mytheresa.com/1094/1236/66/jpeg/catalog/product/d9/P00770112.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 400$</p>
            <div className='text-div'> 
            <p>𝚙𝚒𝚗𝚔 𝚝𝚘𝚙 𝚠𝚒𝚝𝚑 𝚗𝚎𝚌𝚔𝚕𝚊𝚜𝚎</p>
           <p className="cart1" onClick={()=>{!cart6 ? setcart6(true) : setcart6(false)}}>{cart6 ? '✔️' : '🛒' }</p></div>
          </div>
          <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/69/43/78/69437853a6e21cba8f248b71c065de95.jpg'/></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 240$</p>
            <div className='text-div'> 
            <p>𝚠𝚑𝚒𝚝𝚎 𝚝-𝚜𝚑𝚒𝚛𝚝 𝚠𝚒𝚝𝚑 𝚒𝚌𝚘𝚗</p>
            <p className="cart1" onClick={()=>{!cart7 ? setcart7(true) : setcart7(false)}}>{cart7 ? '✔️' : '🛒' }</p></div>
          </div>
         
          <div className='element1' data-aos="fade-in" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/5f/61/d5/5f61d588fcc924b3d249ab39355bdbc6.jpg'/></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 600$</p>
            <div className='text-div'> 
            <p>𝚠𝚑𝚒𝚝𝚎 𝚜𝚑𝚒𝚛𝚝 𝚠𝚒𝚝𝚑 𝚜𝚢𝚖𝚋𝚘𝚕</p>
           <p id="cart3" onClick={()=>{!cart8 ? setcart8(true) : setcart8(false)}}>{cart8 ? '✔️' : '🛒' }</p></div>
          
          </div> <div className='element1' data-aos="fade-right" data-aos-once='true'>
            <div className="img-div" ><img id="image"src='https://i.pinimg.com/736x/2d/a8/dd/2da8dd72cd9209761241dccee28ff9ef.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 756$</p>
            <div className='text-div'> 
            <p>𝙽𝚊𝚜𝚊'𝚜 𝚘𝚛𝚒𝚐𝚒𝚗𝚊𝚕 𝚝-𝚜𝚑𝚒𝚛𝚝</p>
           <p className="cart1" onClick={()=>{!cart9 ? setcart9(true) : setcart9(false)}}>{cart9 ? '✔️' : '🛒' }</p></div>
          
          </div> 
          <div className='element1' data-aos="fade-right" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/69/1a/0d/691a0d415c44f7b840eb674e8822815b.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 120$</p>
            <div className='text-div'> 
            <p>𝙱𝚊𝚔𝚒'𝚜 𝚋𝚕𝚊𝚌𝚔 𝚝-𝚜𝚑𝚒𝚛𝚝</p>
           <p id="cart2" onClick={()=>{!cart10 ? setcart10(true) : setcart10(false)}}>{cart10 ? '✔️' : '🛒' }</p></div>
          </div>
       <h1 id='top-rated-trousers'>Top rated trousers</h1>
       
       <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/f5/fa/19/f5fa196b6420c280115293eb3e23f6fd.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 320$</p>
            <div className='text-div'> 
            <p>𝚋𝚕𝚊𝚌𝚔 𝚌𝚊𝚛𝚐𝚘 𝚝𝚛𝚘𝚞𝚜𝚎𝚛𝚜</p>
           <p id="row3-cart1" onClick={()=>{!cart11 ? setcart11(true) : setcart11(false)}}>{cart11 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/4f/e0/c0/4fe0c00c0d1cc57da4933180a4264dc3.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 430$</p>
            <div className='text-div'> 
            <p>𝚍𝚊𝚛𝚔 𝚋𝚛𝚘𝚠𝚗  𝚙𝚊𝚗𝚝𝚜</p>
           <p id="row3-cart2" onClick={()=>{!cart12 ? setcart12(true) : setcart12(false)}}>{cart12 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos="fade-in" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/736x/30/39/4e/30394e311fe0333182f02a4b69cf1f44.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 99.99$</p>
            <div className='text-div'> 
            <p>𝚍𝚊𝚛𝚔 𝚋𝚕𝚞𝚎 𝚓𝚎𝚊𝚗𝚜 𝚙𝚊𝚗𝚝𝚜</p>
           <p id="row3-cart3" onClick={()=>{!cart13 ? setcart13(true) : setcart13(false)}}>{cart13 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos='fade-right' data-aos-once='true'>
            <div className="img-div"  ><img id='image' src='https://i.pinimg.com/236x/9c/0a/cd/9c0acd9d06df0e798e0142dd5bd7093a.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 238$</p>
            <div className='text-div'> 
            <p>𝚋𝚕𝚊𝚌𝚔 𝚌𝚕𝚊𝚜𝚜𝚒𝚌𝚊𝚕 𝚙𝚊𝚗𝚝𝚜</p>
           <p id="row3-cart4" onClick={()=>{!cart14 ? setcart14(true) : setcart14(false)}}>{cart14 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos='fade-right' data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/c8/be/fd/c8befdb2d8bc437cab6d507c556ae918.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 258$</p>
            <div className='text-div'> 
            <p>𝚙𝚘𝚌𝚔𝚎𝚝 𝚠𝚘𝚖𝚊𝚗'𝚜 𝚙𝚊𝚗𝚝𝚜</p>
           <p id="row3-cart5" onClick={()=>{!cart15 ? setcart15(true) : setcart15(false)}}>{cart15 ? '✔️' : '🛒' }</p></div>
   </div>
   <h1 id="top-rated-hats">Top rated hats</h1>




   <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/2a/ee/9c/2aee9c120304ab128a6001bdfac4830b.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 500$</p>
            <div className='text-div'> 
            <p>𝚋𝚊𝚜𝚎𝚋𝚊𝚕𝚕 𝚌𝚊𝚙 𝚠𝚒𝚝𝚑 𝚜𝚖𝚒𝚕𝚎𝚢</p>
           <p id="row4-cart1" onClick={()=>{!cart16 ? setcart16(true) : setcart16(false)}}>{cart16 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos="fade-left" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/27/c3/c5/27c3c5263ac54c64d22659fddf39201f.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 39.99$</p>
            <div className='text-div'> 
            <p>𝚍𝚊𝚛𝚔 𝚋𝚛𝚘𝚠𝚗 𝚌𝚘𝚠𝚋𝚘𝚢 𝚑𝚊𝚝</p>
           <p id="row4-cart2" onClick={()=>{!cart17 ? setcart17(true) : setcart17(false)}}>{cart17 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos="fade-in" data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/b0/d1/c6/b0d1c6b3f480f17d747947e6ebaa2493.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 110$</p>
            <div className='text-div'> 
            <p>𝚠𝚑𝚒𝚝𝚎 𝚖𝚊𝚏𝚒𝚊 𝚑𝚊𝚝</p>
           <p id="row4-cart4" onClick={()=>{!cart18 ? setcart18(true) : setcart18(false)}}>{cart18 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos='fade-right' data-aos-once='true'>
            <div className="img-div"  ><img id='image' src='https://i.pinimg.com/236x/27/58/d7/2758d71ddcd8cc9aede3edd590868765.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 208$</p>
            <div className='text-div'> 
            <p>𝚠𝚊𝚛𝚖 𝚊𝚗𝚍 𝚠𝚑𝚒𝚝𝚎 𝚑𝚊𝚝</p>
           <p id="row4-cart5" onClick={()=>{!cart19 ? setcart19(true) : setcart19(false)}}>{cart19 ? '✔️' : '🛒' }</p></div>
   </div>
   <div className='element1' data-aos='fade-right' data-aos-once='true'>
            <div className="img-div" ><img id='image' src='https://i.pinimg.com/236x/21/05/6f/21056fb698e40515e0ea5fc1bb984043.jpg' /></div>
            <p id="description">𝐩𝐫𝐢𝐜𝐞: 358$</p>
            <div className='text-div'> 
            <p>𝚑𝚒𝚐𝚑𝚕𝚊𝚗𝚍𝚎𝚛 𝚠𝚒𝚗𝚝𝚎𝚛 𝚑𝚊𝚝</p>
           <p id="row3-cart6" onClick={()=>{!cart20 ? setcart20(true) : setcart20(false)}}>{cart20 ? '✔️' : '🛒' }</p></div>
   </div>
   
    
   <div className='contact-block' data-aos="fade-in" data-aos-once='true'>
     <div className='contact-info'>   
            <p id="contact">CONTACT</p>
      <p id="contact-email">EMAIL: 𝘫𝘢𝘮𝘢𝘴𝘱𝘪𝘴𝘩𝘷𝘪𝘭𝘪𝘯𝘪𝘬𝘢12@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮</p>
      <p id='phone-number'>Phone-Number: 591-19-15-14</p>
      <p id='bussines-number'>Bussines-Number: 599-52-54-53</p>
     </div>
     <div id='social'>
      <p id="donno">SOCIAL NETWORKS</p>
      <p id="facebook">Facebook: 𝘎𝘢𝘳𝘤𝘪𝘢𝘚𝘵𝘰𝘳𝘦</p>
     <p id='instagram'>Instagram: 𝘎𝘢𝘳𝘤𝘪𝘢𝘚𝘵𝘰𝘳𝘦90</p>
     <p id="twitter">Twitter: 𝘎𝘢𝘳𝘤𝘪𝘢𝘚𝘵𝘰𝘳𝘦</p>
     </div>
     <div id="working-schedule">
      <p id="schedule">schedule</p>
     <p id="schedule-time">12.00-9.00 PM</p>
     <p id="schedule-time2">12.00-8.00 AM</p>
     </div>

     <p className='copyright'>Copyright © 2023 Garcia Corporation</p>
    </div>

  </div>
</div>
);
}