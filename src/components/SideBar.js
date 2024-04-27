import { BiHomeAlt} from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import React from "react";
import { useSelector } from "react-redux";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const SideBar = () =>{
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return(
        <div className="flex flex-col w-56 p-4 shadow-lg text-black absolute bg-white h-screen">
            <ul>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><BiHomeAlt /> Home </li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><SiYoutubeshorts />Shorts</li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><MdSubscriptions />Subscriptions</li>
                <hr/>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]">You <MdOutlineNavigateNext /></li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><GrChannel />Your Channel</li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><LuHistory />History</li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><CgPlayList />Playlists</li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><BsClock />Watch Later</li>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-300 w-[12em]"><AiOutlineLike />Liked Videos</li>
            </ul>

        </div>
    )

}

export default SideBar;