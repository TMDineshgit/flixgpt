import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { listUpcomingMovies } from "../store/slices/movieSlice";

const useUpcomingList = () =>{
    
    const dispatch = useDispatch();

    const getUpcomingMovies = async() =>{
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
          const json = await data.json();
          console.log("upcoming",json.results);
          dispatch(listUpcomingMovies(json.results));
        } catch (err) {
          console.error(err);
        }
  }

    useEffect(() => {

        getUpcomingMovies()

    },[])
}




export default useUpcomingList