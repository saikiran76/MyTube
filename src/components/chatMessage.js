
const ChatMessage = ({profile, user, comment}) => {
    return(
    <div className="w-[26em] mx-3 mt-3 rounded-md flex items-center border-gray-400 border-b mb-2 pb-1">
        <div className="flex items-center gap-2">
            <div><img className="w-[2.5em] rounded-3xl" src={profile} alt="prof"/></div>
            <p className="font-bold">{user}</p>
        </div>
        <div className="mx-1">
            <p className="text-sm mx-1">{comment}</p>
        </div>


    
    </div>

)

}

export default ChatMessage;