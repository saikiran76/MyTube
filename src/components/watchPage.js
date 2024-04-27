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
        <div className="px-8 py-6 w-full">
            <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full h-[250px] md:h-[24em] md:w-[720px] aspect-w-16 aspect-h-9">
                <iframe
                    className="w-full h-full"
                    src={"https://www.youtube.com/embed/" + videoParam}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>

                <ChatSection/>

                

            </div>
      

            <CommentContainer/>
            

        </div>
    )

}

export default WatchPage;