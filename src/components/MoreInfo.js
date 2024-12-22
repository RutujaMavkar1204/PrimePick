import React,{useContext,useState,useEffect} from "react";
import userContext from '../context/userContext'


export default function MoreInfo(){
    const[detail,setDetail]=useState([])
    const[posterapi,setPosterapi]=useState([])
    
 const{moviename,loading,setLoading}=useContext(userContext)
 useEffect(() => {
   
    const fetchMovies = async () => {
      
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=f140b5b40027642de9f677ae380251eb&query=${moviename}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQwYjViNDAwMjc2NDJkZTlmNjc3YWUzODAyNTFlYiIsIm5iZiI6MTcyMzYwMTA5OC4wNjU3MTcsInN1YiI6IjY2ODI2NTg0YzAyNzgzYjJjNjM0YzgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N38wuzBua6x5opi-mQs5HpqMV0V-kCkT3_iRt0XbMA'
            },
          }
        );
        const data = await response.json();
      setPosterapi(data.results[0])
        
      
    };
    fetchMovies();
    const fetchArticles = async () => {
    
        const main = `http://www.omdbapi.com/?s=${moviename}&type=movie&apikey=2a427462`;
       
        const response = await fetch(main);
        const movieData = await response.json();
        
        
        if (movieData.Search) {
              const detailedMovies = await Promise.all(
              movieData.Search.map(async (movie) => {
              const imdbData = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=2a427462`;
              const fetchimdb = await fetch(imdbData);
              const convertimdb = await fetchimdb.json();
              return convertimdb; 
            })
          );
          setDetail(detailedMovies[0]);
         
        } 
       
        setLoading(false);
      };
  
      fetchArticles();
  }, [moviename]);
console.log(detail)
let ans=parseInt(detail.Runtime);
let finalans=parseInt(ans/60);
let ans2=parseInt(detail.Runtime);
let finalans2=ans2%60;

    return(
        
        <>
      <div className="moreinfoTop"></div>
<div className="detailtopbar">
  <div className="title-section">
    <h1 className="movie-title">{detail.Title}</h1>
    <div className="belowbar">
      <p>{detail.Year} |</p>
      <p>{detail.Rated} |</p>
      <p>{finalans}hr {finalans2}min</p>
    </div>
  </div>
  <div className="rating-section">
    <p className="section-title">Rating</p>
    <div className="imdb">
      <p>{detail.imdbRating}/10</p>
      <p>{detail.imdbVotes}</p>
    </div>
  </div>
  <div className="country-section">
    <p className="section-title">Country</p>
    <div className="country-info">
      <p>{detail.Country}</p>
    </div>
  </div>
</div>
<div className="additional-info">
  <p>Awards: {detail.Awards}</p>
  <p>Actors: {detail.Actors}</p>
  <p>Box Office: {detail.BoxOffice}</p>
  <p>Director: {detail.Director}</p>
  <p>Genre: {detail.Genre}</p>
  <p>Language: {detail.Language}</p>
  <p>Writer: {detail.Writer}</p>
  <p>Plot: {detail.Plot}</p>
</div>
<div className="poster-container">
  <img src={detail.Poster} alt="Movie Poster" className="movie-poster"/>
</div>

         </>
    )
}


