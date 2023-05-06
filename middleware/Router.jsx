import React from "react";
import { Outlet,Navigate } from "react-router-dom";  


function HomeRouter({state,register_state}){
    let boolean=state;
    let second_boolean=register_state;
  if(boolean || second_boolean){
    return <Outlet/>
  }else{
    return <Navigate to="/login"/> 
  }
}

export default HomeRouter