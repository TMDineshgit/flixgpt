import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        listNowPlayingMovies:null,
        bgTrailerVid: null,
        listPopularMovies: null,
        listUpcomingMovies: null,
        listTopRatedMovies: null
    },
    reducers: {
        listNowPlayingMovies:(state, action) => {
            state.listNowPlayingMovies = action.payload
        },
        getBgTrailerId:(state, action) =>{
            state.bgTrailerVid = action.payload
        },
        listPopularMovies:(state, action) => {
            state.listPopularMovies = action.payload
        },
        listUpcomingMovies:(state, action) => {
            state.listUpcomingMovies = action.payload
        },
        listTopRatedMovies:(state, action) => {
            state.listTopRatedMovies = action.payload
        },
    }

})

export const { listNowPlayingMovies, getBgTrailerId, listPopularMovies, listUpcomingMovies, listTopRatedMovies } = movieSlice.actions
export default movieSlice.reducer
