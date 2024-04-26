import { useDispatch, useSelector } from "react-redux";
// import store from "../utils/appStore";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./chatMessage";
import { useEffect, useState } from "react";
import { generateRandomName } from "../utils/helper";
import { makeid } from "../utils/helper";
import { VscSend } from "react-icons/vsc";

const ChatSection = () =>{
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
    const items = useSelector(store=>store.chat.messages);
    const clickHandler = () =>{
        dispatch(addMessage({   
            user:generateRandomName(),
            comment: makeid(Math.random()*20 + 1) ,
            profile: "https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
        }))


    }

    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API polling")
            dispatch(
                addMessage({
                    user:generateRandomName(),
                    comment: makeid(Math.random()*20 + 1) + "🧨🧨",
                    profile: "https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
                }))
        }, 2000);
        

        return () => clearInterval(i);
    }, [])


    return(
        <div>
        <div className="bg-white h-[30em] w-[26em] rounded-md flex flex-col-reverse overflow-y-auto overflow-hidden">

                {
                    items.map((item, index)=>(
                        <ChatMessage profile={item.profile} user={item.user} comment={item.comment} key={index} />
                ))
                }

        </div>

        <form onSubmit={
            (e)=>{
                e.preventDefault()
                dispatch(addMessage({
                    user: "KSK",
                    comment:liveMessage,
                    profile:"https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
                }))

                }} className="flex px-2 rounded-b-md py-2 items-center">
                <input value={liveMessage}
                onChange={(e)=>setLiveMessage(e.target.value)}
                className=" px-2 py-2 rounded-md border-gray-600 border-l border-r border-t border-b w-[20em]" placeholder="Chat"/>
                <button onClick={()=>clickHandler()} className="bg-green-300 rounded-md w-[5em] h-[2em] ml-[0.5em] flex items-center">
                    <span className="mx-2"><VscSend/></span>
                </button>
        </form>
        
        </div>
    )

}

export default ChatSection;