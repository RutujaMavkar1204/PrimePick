import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom'
import userContext from '../context/userContext'


const CardHori = ({ imgurl,title,year,rating,people}) => {
  const{setMoviename}=useContext(userContext)
  const getTitle=()=>{
    setMoviename(title)
    console.log(title)
  }
  
 const stars=rating/2;
 const ans=(Math.floor(stars*10))%10;

 const starsEmp=[];
 let num=1;
 if(rating%2==0){
   num=2;
}

 for(let j=num;j<=5-stars; j++){
  starsEmp.push(
    <i class=" far fa-solid fa-star star" style={{color: '#FFD43B'}}></i>
  )
 }
 const starsArr=[];
 for(let i=1;i<=stars;i++){
  starsArr.push(
<i className=" fas fa-solid fa-star star" style={{color: '#FFD43B'}}></i>
  )

 }

 
  return(
  
    
  imgurl && <div className="cardHori"  >
                     <NavLink to="/MoreInfo" className="cardlink" onClick={getTitle}>{imgurl!="N/A" &&<img src={imgurl} o className="cardhori-img "/>} 
                     <h3>{title.length>=22?title.slice(0,18)+"...":title}</h3>
                     <div className="cardmoreinfo">
                     <p className="cardInfo1">{year}</p>
                     <p><i class=" fas fa-solid fa-star star" style={{color: '#FFD43B'}}></i></p>
                     <p className="cardInfo2"> {rating} ({people})</p>
                     <p>{starsArr}</p>
                     <p>{ans>=5?<i className=" fas fa-solid fa-star-half-alt star" style={{color: '#FFD43B'}}></i>:<i class=" far fa-solid fa-star star" style={{color: '#FFD43B'}}></i>}</p>
                     <p>{starsEmp}</p>
                     </div>
                     </NavLink>
                     
    
  </div>
  
  
);}

export default CardHori;