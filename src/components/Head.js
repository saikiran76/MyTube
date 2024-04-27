import React, { useEffect } from "react"
import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { SEARCH_API, YTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

import { CiSearch } from "react-icons/ci";
// import UilReact from '@iconscout/react-unicons/icons/uil-react'


const Header = () =>{
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    

    const cacheMemory = useSelector(state => state.search);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(cacheMemory[query]){
                setSuggestions(cacheMemory[query])
            }else{
                getSuggestions()
            }
        }, 200)
        
        // make an api call after 200ms

        return()=>{
            clearTimeout(timer);
        }

    },[query])

    const dispatch = useDispatch();

    const getSuggestions = async() =>{
        console.log('Api call' + query);
        const data = await fetch(SEARCH_API +  query);
        const json = await data.json();
        console.log(json);
        // console.log(json[1]);
        setSuggestions(json[1]);
        // console.log(suggestions);
        dispatch(
            cacheResults({
                [query]:json[1]
            })
        )
    }

    
    const toogleHandler = ()=>{
        setTimeout(() => {
            dispatch(toogleMenu());
          }, 100);
    }


    const searchHandle = (e) =>{
        setQuery(e);
        console.log(query);

    }

    return(
        <div className="grid grid-flow-col shadow-lg items-center w-screen">
            <div className="flex items-center">
                <img onClick={()=>toogleHandler()} className="h-16 bg-transparent cursor-pointer" src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png" alt="Ham"/>

                <img className="h-16 cursor-pointer" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"  alt="Utube"/>
            </div>
               
            <div className="col-span-10 px-10 relative flex items-center">
                <input className="h-[34px] rounded-l-full w-1/2 mr-0 p-4 hidden md:inline" placeholder="What's in your mind?"
                 onChange={(e)=> searchHandle(e.target.value)}
                 onFocus={()=>setShowSuggestions(true)}
                 onBlur={()=>setShowSuggestions(false)}></input>
                {/* <div className="fixed flex flex-col list-none bg-sky-200 px-3 py-2 w-[420px] rounded-sm"> */}
                    { 
                    // But Never use index as a key
                        showSuggestions && (suggestions.map((item, index)=>(
                            <div key={index} className="absolute flex overflow-auto  h-[100px] top-9 bg-sky-200 px-3 py-2 w-[420px] rounded-md">
                                <ul>
                                    <li className="py-1 border-b-[1px] w-[390px] shadow-md cursor-default hover:bg-slate-400" key={index}> 
                                        <CiSearch className="inline-block pr-2"/>
                                        <p className="text-sm inline">{item}</p>
                                       
                                    </li>
                                </ul>
                        </div>)))
                    
                    }
                
                <button className="h-1/2 w-12 rounded-r-full bg-gray-300 px-3 py-2 hidden md:block">
                   <CiSearch/>
                </button>

            </div>

            <button className="h-1/2 w-12 px-3 py-2 block md:hidden">
                   <CiSearch/>
            </button>
            
            <img className="w-8 col-span-1 m-4 cursor-pointer" src="https://e7.pngegg.com/pngimages/802/786/png-clipart-google-account-google-search-customer-service-google-logo-login-button-blue-sphere-thumbnail.png" alt="user"/>

        </div>
    )
}

export default Header;