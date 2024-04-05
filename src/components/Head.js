import React from "react"
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
// import UilReact from '@iconscout/react-unicons/icons/uil-react'


const Header = () =>{
    const [dark, setDark] = React.useState(false);
    const dispatch = useDispatch();
    
    const toogleHandler = ()=>{
        dispatch(toogleMenu());
    }

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return(
        <div className="grid grid-flow-col shadow-lg">
            <div className="flex flex-row">
                <img onClick={()=>toogleHandler()} className="h-16 bg-transparent cursor-pointer" src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png" alt="Ham"/>

                <img className="h-16 cursor-pointer" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"  alt="Utube"/>
            </div>
               
            <div className="col-span-10 px-10">
                <input className="h-1/2 rounded-l-full w-1/2 m-3 mr-0 p-4" placeholder="What's in your mind?"></input>
                <button className="h-1/2 w-16 rounded-r-full bg-gray-300 p-2">
                   <img className="w-[5px]" src="https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png" alt="search"/>
                </button>
            </div>

            <button onClick={()=> darkModeHandler()}>
                    {
                        
                        dark && <IoSunny /> // render sunny when dark is true
                    }
                    {
                        !dark && <IoMoon /> // render moon when dark is false
                    }
            </button>

            <img className="w-8 col-span-1 m-4 cursor-pointer" src="https://e7.pngegg.com/pngimages/802/786/png-clipart-google-account-google-search-customer-service-google-logo-login-button-blue-sphere-thumbnail.png" alt="user"/>

        </div>
    )
}

export default Header;