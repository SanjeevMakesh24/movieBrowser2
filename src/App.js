import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom'; // Note the use of Routes
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView'
import MOVIE_API_KEY from './components/apikey';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() =>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult-false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
    
  }, [searchText])


  return (    
    <div>
       
   
      <Navbar searchText = {searchText} setSearchText={setSearchText} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword = {searchText} searchResults = {searchResults}/>} /> 
        <Route path="/movies/:id" element={<MovieView />} />
        </Routes>  
 
     {/* <h1>Hello from 201</h1> */}
    </div>
  );
}

export default App;
