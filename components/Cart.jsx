import { useState } from "react";
import "../css/Cart.css";

export default function Cart(props){ 

const [card1,setcard1]=useState(true); //cart1
const [card2,setcard2]=useState(true);//cart2
const [card3,setcard3]=useState(true);
const [card4,setcard4]=useState(true);
const [card5,setcard5]=useState(true);
const [card6,setcard6]=useState(true);
const [card7,setcard7]=useState(true);
const [card8,setcard8]=useState(true);
const [card9,setcard9]=useState(true);
const [card11,setcard11]=useState(true);
const [card12,setcard12]=useState(true);
const [card13,setcard13]=useState(true);
const [card14,setcard14]=useState(true);
const [card15,setcard15]=useState(true);
const [card16,setcard16]=useState(true);
const [card17,setcard17]=useState(true);
const [card18,setcard18]=useState(true);
const [card19,setcard19]=useState(true);
const [card20,setcard20]=useState(true);
const [card10,setcard10]=useState(true);




    return (
   <div className="main-cart-container">
  <div className="cart-container">
   <div id="cart-purchase"><h1>Cart Items</h1></div>
   <div className="item-list">
    {props.cart1 && card1 ?<div className="elements"> 
     <h2>𝘣𝘭𝘢𝘤𝘬 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘥𝘰𝘵𝘴</h2>
     <img className="img" src="data:image/jpeg;base64,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" />
      <button className="elements_button"onClick={()=>{setcard1(false)}}>X</button>
    </div> :null}
    
    {props.cart2 && card2 ?<div className="elements"> 
     <h2>𝘳𝘦𝘥 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘣𝘰𝘵𝘵𝘰𝘮</h2>
     <img className="img" src="https://media.istockphoto.com/id/1208683466/photo/colorful-sport-shoes-on-mustard-color-backround.jpg?s=170667a&w=0&k=20&c=v6CI1ayYNRDmX-CcKlYv3wunL0bGlKcIkVGikvSsS4M=" />
      <button className="elements_button"onClick={()=>{setcard2(false)}}>X</button>
    </div> :null}

    {props.cart3 && card3 ?<div className="elements"> 
     <h2>𝘣𝘭𝘢𝘤𝘬 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘣𝘭𝘶𝘦 𝘯𝘦𝘰𝘯</h2>
     <img className="img" src="https://www.brilliantledshoes.com/image/cache/catalog/Women/brilliantledshoes-WLR122/Black-High-Top-LED-Light-Up-Shoes-for-Women-2-550x550.jpg" />
      <button className="elements_button"onClick={()=>{setcard3(false)}}>X</button>
    </div> :null}
 
    {props.cart4 && card4 ?<div className="elements"> 
     <h2>𝘸𝘩𝘪𝘵𝘦 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘨𝘳𝘦𝘦𝘯 𝘤𝘰𝘭𝘰𝘳</h2>
     <img className="img" src="https://rukminim1.flixcart.com/image/832/832/ky7lci80/shoe/q/2/r/6-wn-06-6-sachnick-white-and-neon-original-imagagfnwgchubnn.jpeg?q=70" />
      <button className="elements_button"onClick={()=>{setcard4(false)}}>X</button>
    </div> :null}

    {props.cart5 && card5 ?<div className="elements"> 
     <h2>𝘨𝘳𝘦𝘦𝘯 𝘴𝘩𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘸𝘩𝘪𝘵𝘦 𝘪𝘤𝘰𝘯𝘴</h2>
     <img className="img" src="https://encrypted-tbn0.gstatic.com/D?q=tbn:ANd9GcTUHMjwTGPGTlKiBNL2BTCK1IzcN7CXhkUtgg&usqp=CAU" />
      <button className="elements_button"onClick={()=>{setcard5(false)}}>X</button>
    </div> :null}

    {props.cart6 && card6 ?<div className="elements"> 
     <h2>𝚙𝚒𝚗𝚔 𝚝𝚘𝚙 𝚠𝚒𝚝𝚑 𝚗𝚎𝚌𝚔𝚕𝚊𝚜𝚎</h2>
     <img className="img" src="https://img.mytheresa.com/1094/1236/66/jpeg/catalog/product/d9/P00770112.jpg" />
      <button className="elements_button"onClick={()=>{setcard6(false)}}>X</button>
    </div> :null}
 
    {props.cart7 && card7 ?<div className="elements"> 
     <h2>𝚠𝚑𝚒𝚝𝚎 𝚝-𝚜𝚑𝚒𝚛𝚝 𝚠𝚒𝚝𝚑 𝚒𝚌𝚘𝚗</h2>
     <img className="img" src="https://i.pinimg.com/236x/69/43/78/69437853a6e21cba8f248b71c065de95.jpg" />
      <button className="elements_button"onClick={()=>{setcard7(false)}}>X</button>
    </div> :null}

   {props.cart8 && card8 ?<div className="elements"> 
     <h2>𝚠𝚑𝚒𝚝𝚎 𝚜𝚑𝚒𝚛𝚝 𝚠𝚒𝚝𝚑 𝚜𝚢𝚖𝚋𝚘𝚕</h2>
     <img className="img" src="https://i.pinimg.com/236x/5f/61/d5/5f61d588fcc924b3d249ab39355bdbc6.jpg" />
      <button className="elements_button"onClick={()=>{setcard8(false)}}>X</button>
    </div> :null}

    {props.cart9 && card9 ?<div className="elements"> 
     <h2>N𝚊𝚜𝚊'𝚜 𝚘𝚛𝚒𝚐𝚒𝚗𝚊𝚕 𝚝-𝚜𝚑𝚒𝚛𝚝</h2>
     <img className="img" src="https://i.pinimg.com/736x/2d/a8/dd/2da8dd72cd9209761241dccee28ff9ef.jpg" />
      <button className="elements_button"onClick={()=>{setcard9(false)}}>X</button>
    </div> :null}

    {props.cart10 && card10 ?<div className="elements"> 
     <h2>𝙱𝚊𝚔𝚒'𝚜 𝚋𝚕𝚊𝚌𝚔 𝚝-𝚜𝚑𝚒𝚛𝚝</h2>
     <img className="img" src="https://i.pinimg.com/236x/69/1a/0d/691a0d415c44f7b840eb674e8822815b.jpg" />
      <button className="elements_button"onClick={()=>{setcard10(false)}}>X</button>
    </div> :null}
    
    {props.cart11 && card11 ?<div className="elements"> 
     <h2>𝚋𝚕𝚊𝚌𝚔 𝚌𝚊𝚛𝚐𝚘 𝚝𝚛𝚘𝚞𝚜𝚎𝚛𝚜</h2>
     <img className="img" src="https://i.pinimg.com/236x/f5/fa/19/f5fa196b6420c280115293eb3e23f6fd.jpg" />
      <button className="elements_button"onClick={()=>{setcard11(false)}}>X</button>
    </div> :null}

    {props.cart12 && card12 ?<div className="elements"> 
     <h2>𝚍𝚊𝚛𝚔 𝚋𝚛𝚘𝚠𝚗  𝚙𝚊𝚗𝚝𝚜</h2>
     <img className="img" src="https://i.pinimg.com/236x/4f/e0/c0/4fe0c00c0d1cc57da4933180a4264dc3.jpg" />
      <button className="elements_button"onClick={()=>{setcard12(false)}}>X</button>
    </div> :null}

    {props.cart13 && card13 ?<div className="elements"> 
     <h2>𝚍𝚊𝚛𝚔 𝚋𝚕𝚞𝚎 𝚓𝚎𝚊𝚗𝚜 𝚙𝚊𝚗𝚝𝚜</h2>
     <img className="img" src="https://i.pinimg.com/736x/30/39/4e/30394e311fe0333182f02a4b69cf1f44.jpg" />
      <button className="elements_button"onClick={()=>{setcard13(false)}}>X</button>
    </div> :null}
    
    {props.cart14 && card14 ?<div className="elements"> 
     <h2>𝚋𝚕𝚊𝚌𝚔 𝚌𝚕𝚊𝚜𝚜𝚒𝚌𝚊𝚕 𝚙𝚊𝚗𝚝𝚜</h2>
     <img className="img" src='https://i.pinimg.com/236x/9c/0a/cd/9c0acd9d06df0e798e0142dd5bd7093a.jpg' />
      <button className="elements_button"onClick={()=>{setcard14(false)}}>X</button>
    </div> :null}

    {props.cart15 && card15 ?<div className="elements"> 
     <h2>𝚙𝚘𝚌𝚔𝚎𝚝 𝚠𝚘𝚖𝚊𝚗'𝚜 𝚙𝚊𝚗𝚝𝚜</h2>
     <img className="img" src='https://i.pinimg.com/236x/c8/be/fd/c8befdb2d8bc437cab6d507c556ae918.jpg' />
      <button className="elements_button"onClick={()=>{setcard15(false)}}>X</button>
    </div> :null}

    {props.cart16 && card16 ?<div className="elements"> 
     <h2>𝚋𝚊𝚜𝚎𝚋𝚊𝚕𝚕 𝚌𝚊𝚙 𝚠𝚒𝚝𝚑 𝚜𝚖𝚒𝚕𝚎𝚢</h2>
     <img className="img" src='https://i.pinimg.com/236x/2a/ee/9c/2aee9c120304ab128a6001bdfac4830b.jpg' />
      <button className="elements_button"onClick={()=>{setcard16(false)}}>X</button>
    </div> :null}

    {props.cart17 && card17 ?<div className="elements"> 
     <h2>𝚍𝚊𝚛𝚔 𝚋𝚛𝚘𝚠𝚗 𝚌𝚘𝚠𝚋𝚘𝚢 𝚑𝚊𝚝</h2>
     <img className="img" src='https://i.pinimg.com/236x/27/c3/c5/27c3c5263ac54c64d22659fddf39201f.jpg' />
      <button className="elements_button"onClick={()=>{setcard17(false)}}>X</button>
    </div> :null}

    {props.cart18 && card18 ?<div className="elements"> 
     <h2>𝚠𝚑𝚒𝚝𝚎 𝚖𝚊𝚏𝚒𝚊 𝚑𝚊𝚝</h2>
     <img className="img" src='https://i.pinimg.com/236x/b0/d1/c6/b0d1c6b3f480f17d747947e6ebaa2493.jpg' />
      <button className="elements_button"onClick={()=>{setcard18(false)}}>X</button>
    </div> :null}

    {props.cart19 && card19 ?<div className="elements"> 
     <h2>𝚠𝚊𝚛𝚖 𝚊𝚗𝚍 𝚠𝚑𝚒𝚝𝚎 𝚑𝚊𝚝</h2>
     <img className="img" src='https://i.pinimg.com/236x/27/58/d7/2758d71ddcd8cc9aede3edd590868765.jpg' />
      <button className="elements_button"onClick={()=>{setcard19(false)}}>X</button>
    </div> :null}

    {props.cart20 && card20 ?<div className="elements"> 
     <h2>𝚑𝚒𝚐𝚑𝚕𝚊𝚗𝚍𝚎𝚛 𝚠𝚒𝚗𝚝𝚎𝚛 𝚑𝚊𝚝</h2>
     <img className="img" src='https://i.pinimg.com/236x/21/05/6f/21056fb698e40515e0ea5fc1bb984043.jpg' />
      <button className="elements_button"onClick={()=>{setcard20(false)}}>X</button>
    </div> :null}

  </div>
   </div>
   </div>
    );
}