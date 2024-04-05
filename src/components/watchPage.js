import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";


const WatchPage = () =>{
    const dispatch = useDispatch();
    const [param] = useSearchParams()
    const videoParam = param.get("v");
    console.log(videoParam);
    useEffect(()=>{
        dispatch(closeMenu());
    }, [])
    return(
        <div className="px-10 py-6 rounded-lg">
            <iframe width="720" height="412" src={"https://www.youtube.com/watch?v=" + videoParam } title="YouTube video player" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{borderRadius: "1em"}}></iframe>

        </div>
    )

}

export default WatchPage;