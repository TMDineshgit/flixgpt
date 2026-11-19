import { useSelector } from "react-redux"
import BrowseBanner from "./BrowseBanner"

const BrowseMainWrapper = () =>{

    const movies = useSelector((store) => store.movies?.listNowPlayingMovies)
    if(!movies || movies.length === 0) return null //early return 

    const bannerMovie = movies[0]
    console.log(bannerMovie)

    const { original_title, overview, id } = bannerMovie
    return(
        
        <div className="browse-mainwrapper">
            <BrowseBanner title={original_title} overview={overview} movieId={id} />
        </div>
    )
}

export default BrowseMainWrapper