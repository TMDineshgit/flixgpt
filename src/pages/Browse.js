
//import { useAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { listNowPlayingMovies } from "../store/slices/movieSlice";
import BrowseMainWrapper from "../components/BrowseMainWrapper";

const Browse = () => {
  //const { user } = useAuth();
  const dispatch = useDispatch();

  const getNowPlayingMovies = async() =>{
        try {
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
          const json = await data.json();
          //console.log(json.results);
          dispatch(listNowPlayingMovies(json.results));
        } catch (err) {
          console.error(err);
        }
  }

  useEffect(() => {

    getNowPlayingMovies()

  },[])

  //const 

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <BrowseMainWrapper />
    </div>
  );
};

export default Browse;
