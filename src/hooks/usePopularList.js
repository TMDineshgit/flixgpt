import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { listPopularMovies } from "../store/slices/movieSlice";

const usePopularList = () =>{
    
    const dispatch = useDispatch();

    const getPopularMovies = async() =>{
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
          const json = await data.json();
          //console.log("popular",json.results);
          dispatch(listPopularMovies(json.results));
        } catch (err) {
          console.error(err);
        }
  }

    useEffect(() => {

        getPopularMovies()

    },[])
}




export default usePopularList