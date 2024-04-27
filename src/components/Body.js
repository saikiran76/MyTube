import React from "react";
// import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import MainContainer from "./MainContainer";


const Body = () =>{
    // const isMenuOpen = useSelector((state)=>  state.isMenuOpen);
    return(
        <div className="flex relative">
            <div className="absolute left-1 z-30"><SideBar/></div>
            <div className="z-20"><Outlet/></div>
        </div>
       
    )

}

export default Body;