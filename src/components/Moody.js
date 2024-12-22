import React,{useState} from 'react';
import {NavLink,useNavigate} from 'react-router-dom'



export default function Moody(){
    const moods=['Happy 😊','Thrill-Seeking 🤩','Fearful 😨','Sad 😢','Angry 😡','Lonely 😔','Jealous 😒','Chill 😎','Thoughtfull 🤔','Tense 😬','Sleepy 😴','Cant tell 😏','Romantic 😍','Melanchollic 😔','Humorous 😂','reflective 🧐','Gloomy 😶‍🌫️']
    const [currentmood,setCurrentmood]=useState("")
    const navigate=useNavigate();
    const nextPage=(items)=>{
        setCurrentmood(items,)
        navigate('/mood-movies',{state:{items}});


    }
    return(
        <>
        <div className="moodyTop"></div>
        <div className="moodypara">
            <h2 className="moodyh2"> top-rated Discoverted movies based on your mood🍿</h2>
            <p className="moodyp">How Are You Feeling?</p>
        </div>
        <div className="moods">
           { moods.map((items)=>(
           <button  className="moodyButtons" onClick={()=>nextPage(items)}>{items}</button>
           ))}
        </div>             
        </>
    )
}