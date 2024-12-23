import React, { useState, useEffect,useContext } from "react";
import Card from './Card';
import userContext from '../context/userContext'
import CardHori from './CardHori';
import Home from './Home'

export default function Search() {
  
  const {movies,setMovies,genreNames,articles,username}=useContext(userContext)
 

  

  return (
    <div>
  {username?(
    <div>
       <div className="topsearch"></div> 
      <div className="row allcard">
        {articles.map((item) => (
          
         item.Title !="Undefined" && item.imdbRating!="N/A" && item.Poster!="N/A" &&( <Card
            className="card"
            key={item.imdbID}
            imgurl={item.Poster}
            title={item.Title}
            year={item.Year}
            rating={item.imdbRating}
            people={item.imdbVotes}


          />)
        ))}
      </div>
     
    </div>
  ):(<div>
          <Home/>
  </div>)}
   

     
    </div>
  );
}
