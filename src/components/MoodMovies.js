import React,{useState,useEffect} from 'react';
import {NavLink,useLocation} from 'react-router-dom'
import axios from 'axios'





const API_KEY='AIzaSyCuCGIxwNSGeZgjSIxAJjS4fx4tJaUJEV4';





export default function MoodMovies(){
    const moods=['Happy 😊','Thrill-Seeking 🤩','Fearful 😨','Sad 😢','Angry 😡','Lonely 😔','Jealous 😒','Chill 😎','Thoughtfull 🤔','Tense 😬','Sleepy 😴','Horny 😏','Romantic 😍','Melanchollic 😔','Humorous 😂','reflective 🧐','Gloomy 😶‍🌫️']
    const moodId=[["35","10402","16","10751"],["53","28","878","12"],["27","53","9648"],["18","10749","10402","99"],["28","80","53"],["10749","18","10751"],["35","10749","80"],["12","35","10402"],["99","36","878"],["53","9648","27"],["16","10751","12"],["10749","35","10402"],["10749","18","14"],["18","10749","99"],["35","10402","12"],["99","878","9648"],["18","53","10752"]]

    const location = useLocation();
    const[final,setFinal]=useState("");
    const [loading, setLoading] = useState(true);
    const [num,setNum]=useState([])
    const{ items }=location.state || {}
    const[i,setI]=useState(0)
    const[youtubelink,setYoutubeLink]=useState('')
    const[showimg,setShowimg]=useState(true)
    const goahead=()=>{
      if(i>=19){
        setI(19)
      }
      else{  
        setI(i+1)
        
      }
      
    }
    const goback=()=>{
      if(i<1){
        setI(0)
      
      }
      else{
        setI(i-1)
        
      }
      
    
    }
    useEffect(()=>{
       for(let i=0;i<moods.length;i++){
        if(items===moods[i]){
          setNum(moodId[i])

        }
       }
        
         
      },[items])
                                                           
    useEffect(() => {
     
        const fetchMovies = async () => {
          if (!num) return;
          
        
          const numgenre=num.join(',')
           const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?with_genres=${numgenre}&api_key=f140b5b40027642de9f677ae380251eb`,
              {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQwYjViNDAwMjc2NDJkZTlmNjc3YWUzODAyNTFlYiIsIm5iZiI6MTcyMzYwMTA5OC4wNjU3MTcsInN1YiI6IjY2ODI2NTg0YzAyNzgzYjJjNjM0YzgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N38wuzBua6x5oh2i-mQs5HpqMV0V-kCkT3_iRt0XbMA'
                },
              }
            );
            const data = await response.json();
            setFinal(data.results[i])
            setLoading(false);
            
        };
        
        fetchMovies();
      }, [num,i]);
      const stars=final.vote_average/2;
      const ans=(Math.floor(stars*10))%10;
     
      const starsEmp=[];
      let number=1;
      
      if(final.vote_average%2==0){
        
        number=2;
     }

     
      for(let j=number;j<=5-stars; j++){
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

     
        const ytlink = async () => {
          setShowimg(false)
          try {
            const link = await axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                part: 'snippet',
                q: `${final.title} trailer`,
                key: API_KEY,  
                type: 'video',
                maxResults: 1,
              },
            });
            const videoId = link.data.items[0]?.id?.videoId;
            console.log(videoId);
            if (videoId) {
              setYoutubeLink(`https://www.youtube.com/embed/${videoId}`);
            }
          } catch (error) {
            console.error('Error fetching YouTube data:', error);
          }
        };
          
        useEffect(() => {
          if (final.title) {
            ytlink(); 
          }
        }, [final.title]);
     
     
    return(
        <>
       <div className="topMoodMovies"></div>
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
          <div>
            <div className="recallMood">
              <h3 className="itemsh3">Feeling {items}</h3>
              <NavLink to="/moods"><button className="buttonback">Change Mood</button></NavLink>
            </div>
            <div className="movieBox">
            <div className="videobox">
            {showimg&&final.backdrop_path!="N/A"&&<img className="video"  src={`https://image.tmdb.org/t/p/w500${final.backdrop_path}`}></img>}
      {showimg&&<button className='ytbutton' onClick={ytlink}><i className="fab fa-youtube" style={{ color: '#ff2e2e' }}></i></button>}
      {youtubelink && (
        <iframe
          className="video"
          width="560"
          height="315"
          src={youtubelink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
          onLoad={() => setLoading(false)} 
        ></iframe>
      )}
      
    </div>
              <div className="moodyinfo">
                <div className="moodtop">
                <h3>{final.title}</h3>
                     <div className="cardmoreinfo">
                     <p className="cardInfo1">{final.release_date}</p>
                     <p><i class=" fas fa-solid fa-star star" style={{color: '#FFD43B'}}></i></p>
                     <p className="cardInfo2"> {final.vote_average} ({final.popularity})</p>
                     <p>{starsArr}</p>
                     <p>{ans>=5?<i className=" fas fa-solid fa-star-half-alt star" style={{color: '#FFD43B'}}></i>:<i class=" far fa-solid fa-star star" style={{color: '#FFD43B'}}></i>}</p>
                     <p>{starsEmp}</p>
                    
                  </div>
                  <div className="moodparah">
                  <p className="moodpara">{final.overview}</p>
                  </div>
                  <div className="moodybutton">
                  <button className="moodyBtn1" onClick={goback}>Previous</button>
                  <button className="moodyBtn2" onClick={goahead}>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
 