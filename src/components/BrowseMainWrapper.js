import { useSelector } from "react-redux"
import BrowseBanner from "./BrowseBanner"
import BrowseMovieList from "./BrowseMovieList"

const BrowseMainWrapper = () =>{

    const movies = useSelector((store) => store.movies?.listNowPlayingMovies)
    const nowPlaying = useSelector((store) => store.movies?.listNowPlayingMovies)
    const popularList = useSelector((store) => store.movies?.listPopularMovies)
    const upcomingList = useSelector((store) => store.movies?.listUpcomingMovies)
    const topratedList = useSelector((store) => store.movies?.listTopRatedMovies)

   if(!nowPlaying?.length || !popularList?.length || !upcomingList?.length || !topratedList?.length) return null

    const bannerMovie = movies[0]

    const { original_title, overview, id } = bannerMovie

    return(
        
        <div className="browse-mainwrapper">
            <BrowseBanner title={original_title} overview={overview} movieId={id} />
            <div className="poster-wrapper">
                <BrowseMovieList title={"now playing"} moviesList={nowPlaying} />
                <BrowseMovieList title={"popular"} moviesList={popularList} />
                <BrowseMovieList title={"Upcoming"} moviesList={upcomingList} />
                <BrowseMovieList title={"Top Rated"} moviesList={topratedList} />
            </div>
           
        </div>
    )
}

export default BrowseMainWrapper