import React from "react"
import {NavLink} from 'react-router-dom'
import photo1 from '../photo/movies.jpg'
import photo2 from '../photo/searchbar1.png'
import photo3 from '../photo/review1.png'
import photo4 from '../photo/clapperboard (1).png'


export default function Home(){
   const handleFeatures=()=>{
    const element =document.getElementById('features')
    element.scrollIntoView();
   }
    return(
        <>
         <div className="tophome"></div> 
        <div className="home">
        <div className="bgImg">
           
        </div>
        <div className="frontThings">
        <div className="top">
        <h1 className="topHeading">Your go-to hub for new releases, trending films, and in-depth movie details.</h1>
        <p className="topPara">Discover your next favourite Movie and TV Shows with PrimePick</p>
        </div>
        <div className="homeBtns">
        <NavLink to="#"><button onClick={handleFeatures} className="homeBtn1 ">Features</button></NavLink>
        <NavLink to="/Discover"><button className="homeBtn2">Discover Movies and Shows</button></NavLink>
        </div>
        <div className="empty" id="features"></div>
        <div >
       
        <div className="box1 " >
        <img src={photo2} className="photo1"></img>
        <div>
        <h3 className="box1Text">Find top movies and shows</h3>
        <p className="box1para"> We allows you to discover the latest blockbusters fresh from theaters, binge-worthy TV series everyone's talking about, and hidden gems gaining traction among viewers. Stay ahead of the curve with newly released content across various genres, from action-packed thrillers to heartwarming dramas.  </p>
        </div>
        </div>
        <div className="box2">
            <div>
        <h3 className="box2Text">Detail review</h3>
        <p className="box2para">Access detailed information about each film. From cast and crew details to plot summaries, ratings, and reviews, we provide a wealth of data to inform your viewing choices. </p>
        </div>
       <div>
        <img src={photo3} className="photo2"></img>
       </div>
        </div>
        <div className="box3">
        <img src={photo1} className="photo3"></img>
        <div>
        <h3 className="box3Text">All in one place</h3>
        <p className="box3para">Whether you're looking for tonight's entertainment or researching your next favorite film, we offers a streamlined, user-friendly experience that puts the world of cinema at your fingertips</p>
        </div>
        </div>
        </div>
        <div className="box4">
            <img src={photo4}></img>
            <h3 className="box4text">Find best Movies and  TV Shows, simplified</h3>
            <NavLink to="/Discover"> <button className="homeBtn3">Discover Movies and Shows</button></NavLink>

        </div>
        </div>
        </div>
       
        </>
    )

}