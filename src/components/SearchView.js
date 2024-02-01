import Hero from "./Hero"
import { Link } from "react-router-dom"

const MovieCard = ({movie}) =>{

    const defaultPosterUrl = 'https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png';
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : defaultPosterUrl;
    const detailUrl =  `/movies/${movie.id}`


    return(
        
        <div className="col-lg-3 col-md-10 col-2 my-5">
        <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title"> {movie.original_title}</h5>
                        {/* <p className="card-text"> {movie.overview}</p> */}
                        <Link to={detailUrl} className="btn btn-primary">Movie Details</Link>
                    </div>
        </div>
        </div>
        
    )
 
}

const SearchView = ({keyword, searchResults}) =>{
    const title =  `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    if(resultsHtml.length > 0){
    return(
        <>
        <Hero text = {title}/>
        {/* {resultsHtml &&  */}
        <div className="container">
            <div className="row">
                {resultsHtml}
            </div>
        </div>
        {/* } */}
        </>
    )
    } else {
        return (
            <>
            <Hero text = {title}/>
        
        <div className="container">
            <div className="notFound">
                {keyword} not found
            </div>
        </div>
      
        </>
        )
    }
}

export default SearchView