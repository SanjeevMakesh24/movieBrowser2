import Hero from "./Hero"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MOVIE_API_KEY from "./apikey"


const MovieView = () =>{
    const {id} = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        console.log('make an api request')
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}&langauge=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails(){
       if(isLoading){
            return <Hero text = "Loading..." />
       }
        if(movieDetails){
            const defaultPosterUrl = 'https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png';
        
            const posterPath = movieDetails.poster_path?`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`:defaultPosterUrl;
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`
            
            return (
            <>
            <Hero text = {movieDetails.original_title} backdrop = {backdropUrl}/> 
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src = {posterPath} alt = "..." className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2> {movieDetails.original_title}</h2>
                        <p className="lead">{movieDetails.overview}</p>
                        <p className="lead">Release Date: {movieDetails.release_date}</p>
                        <p className="lead"> Average Rating: {movieDetails.vote_average.toFixed(1)}/10</p>
                    </div>
                </div>
            </div>
            </>
            )
        }
    }
    return renderMovieDetails()
   
  }

  export default MovieView