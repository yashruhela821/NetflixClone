import { createSlice } from "@reduxjs/toolkit";

 const moivesSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo: null, 
        PopularMovies: null,
        UpcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
    },
 })

 export const { addNowPlayingMovies ,addTrailerVideo,addPopularMovies,addUpcomingMovies} = moivesSlice.actions;
 export  default moivesSlice.reducer;