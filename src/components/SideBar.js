
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () =>{
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return(
        <div className="flex flex-col w-40 p-4 shadow-lg text-black">
            <ul>
                <li className="p-2">Home 🏡</li>
                <li className="p-2">Shorts ▶️</li>
                <li className="p-2">Subscriptions 🎫</li>
                <hr/>
                <li className="p-2">Home</li>
                <li className="p-2">Home</li>
                <li className="p-2">Home</li>
                <li className="p-2">Home</li>
             
            </ul>

        </div>
    )

}

export default SideBar;