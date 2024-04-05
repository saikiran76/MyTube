import React from "react";
// import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";


const Body = () =>{
    // const isMenuOpen = useSelector((state)=>  state.isMenuOpen);
    return(
        <div className="flex">
            <SideBar/>
            <Outlet/>
        </div>
       
    )

}

export default Body;