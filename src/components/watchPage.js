import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./Comments";
import ChatSection from "./chatSection";



const WatchPage = () =>{
    const dispatch = useDispatch();
    const [param] = useSearchParams()
    const videoParam = param.get("v"); // to get video id
    console.log(videoParam);
    useEffect(()=>{
        dispatch(closeMenu());
    }, [])
    return(
        <div className="px-10 py-6 rounded-lg w-screen">
            <div className="flex flex-col md:flex-row">
                <div className="w-[80px] md:w-[720px]">
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoParam }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <ChatSection/>

                

            </div>
      

            <CommentContainer/>
            

        </div>
    )

}

export default WatchPage;