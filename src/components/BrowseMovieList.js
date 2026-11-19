import BrowseMovieCard from "./BrowseMovieCard"

const BrowseMovieList = ({title, moviesList}) =>{
    return(
        <div className="secondary-wrapper px-10 pt-5">
            <h2 className="text-xl font-bold mb-1 text-white capitalize">{title}</h2>
            <BrowseMovieCard moviesList={moviesList} />
        </div>
    )
}

export default BrowseMovieList