import React from "react";

const VideoCard = ({info}) =>{
    // console.log("fetched data into videoCard"+ info);
    const {snippet, statistics} = info;
    const {thumbnails, title, channelTitle} = snippet;
    // console.log(snippet);
    // console.log(statistics)
    return (
        <div className="rounded-lg border-black p-2 bg-zinc-700 shadow-lg w-64 text-white m-2 h-[290px]">
            <img className="cursor-pointer rounded-md" src={thumbnails.medium.url} alt="thumb"/>
            <p className="cursor-pointer text-sm py-1 font-sans hover:font-serif" style={{boxShadow: "0 0 0.75 #00FF19"}}>{title}</p>
            <p className="cursor-pointer text-sm py-1 text-wrap" style={{boxShadow: "0 0 0.75 #00FF19"}}>{channelTitle}</p>
            <p className="cursor-pointer text-sm" style={{boxShadow: "0 0 0.75 #00FF19"}}>{statistics.viewCount} views</p>
        </div>
        
    )

}

export default VideoCard;