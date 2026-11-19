import SlickSlider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { POSTER_URL } from '../utils/constants'

const Slider = SlickSlider.default || SlickSlider

const BrowseMovieCard = ({ moviesList }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    if (!moviesList) return null

    return (
        <div className='slider-container'>
            <Slider {...sliderSettings}>
                {moviesList
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <div key={movie.id} className='p-2 rounded-md overflow-hidden'>
                            <img className='w-full block poster rounded-md' src={POSTER_URL + movie.poster_path} alt={movie.title} />
                            {/* <p className='text-center hide bg-gradient-to-t from-black/50 p-2 text-[16px] font-medium leading-1.1'>{movie.title}</p> */}
                        </div>
                    ))}
            </Slider>
        </div>
    )
}

export default BrowseMovieCard