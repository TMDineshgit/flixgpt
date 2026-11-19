import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useSelector, useDispatch } from "react-redux"
import { getBgTrailerId } from '../store/slices/movieSlice'

const BannerBackground = ({movieId}) =>{
    const dispatch =  useDispatch()
    const trailerId = useSelector((store) => store.movies?.bgTrailerVid)

    const getBgVideo = async() =>{
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/1263337/videos?language=en-US', API_OPTIONS)
            const json = await data.json()
            //console.log(json)
            const bgTrailerList = json.results.filter((video) => video.type === "Trailer")
            const bgTrailer = bgTrailerList.length ? bgTrailerList[0] : json.results[0]
            console.log(bgTrailer)
            dispatch(getBgTrailerId(bgTrailer))
        }
        catch(err){  
            console.error(err)
        }
    }

    useEffect(()=>{
        getBgVideo()
    },[])

    return(
        <div>
            <iframe className="w-full aspect-video" 
            src={"https://www.youtube.com/embed/"+trailerId?.key+"?autoplay=1&mute=1&controls=0"}
            title="YouTube video player" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}
const BannerMovieTitle = ({title, overview}) =>{
    return(
        <div className="title_wrapper max-w-4/12 px-24 py-10 z-10 absolute top-6/12 -translate-y-6/12">
            <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
            <p className="text-md font-normal text-gray-300 mb-8">{overview}</p>
            <div className="flex items-start gap-4">
                <button className="px-10 py-3 rounded-md bg-white hover:bg-white/30 text-black text-md font-bold transition-all">Play</button>
                <button className="px-10 py-3 rounded-md bg-white/60 hover:bg-white/50 text-white text-md font-bold transition-all">More Info</button>
            </div>
        </div>
    )
}
const BrowseBanner = ({title, overview, id}) => {

    return(
        <div className="banner-wrapper relative min-h-[calc(100vh-80px)]">
            <BannerBackground movieId={id} />
            <BannerMovieTitle title={title} overview={overview} />
        </div>
    )
}

export default BrowseBanner