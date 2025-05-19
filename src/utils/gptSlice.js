import { createSlice } from "@reduxjs/toolkit"; 
const gptSlice= createSlice({
    name: "gpt",
    initialState: {
       gptSearch: false,
       SuggestedMoviesFromDS: null,
        searchedMoviesFromTMDB: null,
        searchedText: null,
        loading: false,
    },
    reducers: {
        toggelGptSearch: (state) => {
            state.gptSearch = !(state.gptSearch);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
        addSuggestedMoviesFromDS: (state, action) => {
            const {DsMovies, TMDBMovies,searchedText} = action.payload;
            state.searchedMoviesFromTMDB = TMDBMovies;
            state.SuggestedMoviesFromDS = DsMovies;
            state.searchedText = searchedText;
            state.loading = false;
        },
    },
});
export const { toggelGptSearch,addSuggestedMoviesFromDS,setLoading } = gptSlice.actions;
export default gptSlice.reducer;    