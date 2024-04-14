import acc from "../ksk.jpeg"

const CommentsData = [
    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },

    {
        user:"Sunny",
        comment: "Its really a piece of cake. Thanks for the video. I feel like Gotcha",
        replies:[
            {
                user:"Bunny",
                comment: "Yeah. His content is nowadays really worth watching",
                replies:[
                    {
                        user:"Sahiti",
                        comment:"Hey Bunny, seems like you are AA. Checkout my channel"
                    }
                ]
            }
        ]
    },
    
]



const Comment = ({data}) =>{
    const {user, comment, replies} = data;
    return(
        <div className="flex bg-gray-200 rounded-lg px-3 py-3 mb-2">
            <div className="w-[40px]">
                <img className="rounded-full" src={acc} alt="account"/>
            </div>

            <div className="px-2">
                <h1 className="font-semibold text-xl">{user}</h1>
                <p>{comment}</p>
            </div>
        </div>


    )

}

const CommentsList = ({comments}) =>{
    console.log(comments[0].replies);
    return comments.map((comment, index) => (
            <div>
                <Comment key={index} data={comment}/>
                <div>
                    {/* <CommentsList comments={comment.replies}/> */}
                </div>
            </div>
        ))
}

const CommentContainer = () =>{
    return(
        <div className="mt-2 bg-gray-50 px-4 py-4">
            <h1 className="mb-3 font-bold text-xl">Comments:</h1>
            {/* <Comment data={CommentsData}/> */}
            <CommentsList comments={CommentsData}/>

        </div>
    )

}

export default CommentContainer;