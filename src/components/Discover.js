import React, { useState, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom';
import Button from './Button';
import CardHori from './CardHori';
import userContext from '../context/userContext'

export default function Discover() {
  const{loading,setLoading,movies,setMovies,genreNames,emojis,index}=useContext(userContext)
  console.log(movies)
  return (
    <>
    <div className="dtop"></div>
      <div className="discovertop">
      <div className="discoverBox1">
        <h2 className="dbox1h2">Discover top-rated movies based on your mood🍿</h2>
        <NavLink to="/moods">
          <Button className="dbox1Button">{emojis[index]} Mood Pick</Button>
        </NavLink>
        
      </div>
      
      {loading ? (
           <div class="loader-container">
           <div class="flipping-cards">
               <div class="cardd">L</div>
               <div class="cardd">o</div>
               <div class="cardd">a</div>
               <div class="cardd">d</div>
               <div class="cardd">i</div>
               <div class="cardd">n</div>
               <div class="cardd">g</div>
           </div>
       </div>
         ) : (
          
     genreNames.map((xyz)=>(
       <div className="discoverBox2">
       <h2 className="discoverheading">{xyz}</h2>
       <div className="discoverCards">
        
        
           {movies[xyz].map((item) => (
         
             <CardHori
                className="card "
                key={item.id}
                imgurl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                year={item.release_date}
                title={item.title}
                rating={item.vote_average}
                people={item.vote_count}
              />

            ))}
        
       </div>
       </div>
     ))
    )}
     </div>

    </>
  );
}
