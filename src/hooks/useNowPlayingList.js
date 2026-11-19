import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { listNowPlayingMovies } from "../store/slices/movieSlice";

const useNowPlayingList = () =>{
    
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() =>{
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
          const json = await data.json();
          //console.log("now playing", json.results);
          dispatch(listNowPlayingMovies(json.results));
        } catch (err) {
          console.error(err);
        }
  }

    useEffect(() => {

        getNowPlayingMovies()

    },[])
}




export default useNowPlayingList