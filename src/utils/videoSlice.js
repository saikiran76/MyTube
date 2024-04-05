import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name: "video",
    initialState:{
        videos: []
    },
    reducers:{
        toogleVideos:(state, action)=>{
            state.videos.push(action.payload);

        },

    }
    


})