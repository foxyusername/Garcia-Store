import axios from "axios";
import "../css/Products.css";
import { useState } from "react";
import { useEffect } from "react";


export default function Products(){
const [data,setdata]=useState([]);
const [bool,setbool]=useState(false);

useEffect(()=>{
async function getpicture(){
    let imagedata=await fetch('https://api.unsplash.com/search/photos?query=shoes+t-shirt+trousers+hat&per_page=28&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4 ');
    let jsondata=await imagedata.json();
   setdata(jsondata.results);
   setbool(true);
}
getpicture();
},[]);
console.log(data);

return (
    <div className="Products-page">
      {data.map((results, index) => {
        return (
          <div className="product-card" key={index} data-aos="fade-in" data-aos-once="true">
            <div className="products-image-div">
              <img className="product-image" src={data[index].urls.regular}/>
            </div>
            <div className="desc">
              <div className="desc-box">
                <p className="description-desc">{data[index].alt_description}</p>
              </div>
              <div className="user-box">
                <p className="description-username">{data[index].user.name}</p>
                <p className="description-price">Price: {Math.floor(Math.random()*1000)}$</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
  
}