import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { listTopRatedMovies } from "../store/slices/movieSlice";

const useTopRatedList = () =>{
    
    const dispatch = useDispatch();

    const getTopRatedMovies = async() =>{
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
          const json = await data.json();
          console.log("top rated",json.results);
          dispatch(listTopRatedMovies(json.results));
        } catch (err) {
          console.error(err);
        }
  }

    useEffect(() => {

        getTopRatedMovies()

    },[])
}




export default useTopRatedList