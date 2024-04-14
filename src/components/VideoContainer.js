import React from "react";
import { useState, useEffect } from "react";
import { YTUBE_API } from "../utils/constants";
import VideoCard from "./videoCard";
import { Link } from "react-router-dom";

const VideoContainer = () =>{
    const [videos, setVideos] = useState([]);
    // const video = useSelector(state => state.video.videos);

    useEffect(()=>{
        getVideos();
        // dispatch()
    }, []);

    const getVideos = async ()=>{
        try{
            const videoData = await fetch(YTUBE_API);
            const data = await videoData.json();
            // alert(data.items);
            // console.log(data.items);
            setVideos(data.items);

        }catch(err){
            // alert(err.message);
            console.log(err.message)

        }
    }

    return(
        <div className="ml-3 px-8 flex flex-wrap bg-black">
            {/* <VideoCard info={videos[0]}/> */}
                
            {videos.map((video, index)=>(
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video}/>
                </Link> 
            
            ))}
        </div>
    )

};

export default VideoContainer;