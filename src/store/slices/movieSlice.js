import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        listNowPlayingMovies:null,
        bgTrailerVid: null,
    },
    reducers: {
        listNowPlayingMovies:(state, action) => {
            state.listNowPlayingMovies = action.payload
        },
        getBgTrailerId:(state, action) =>{
            state.bgTrailerVid = action.payload
        }
    }

})

export const { listNowPlayingMovies, getBgTrailerId } = movieSlice.actions
export default movieSlice.reducer
