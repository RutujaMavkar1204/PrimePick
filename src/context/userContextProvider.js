import React,{useState,useEffect} from "react"
import userContext from './userContext';


export default function UserContextProvider({children}){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const[username,setUsername]=useState("");
    const[moviename,setMoviename]=useState('')
    const [movies, setMovies] = useState({});
   
  const genreIds = ['99', '28', '80', '14', '27', '37', '36','53','9648'];
  const genreNames = ['Sci-fi', 'Action', 'Crime', 'Fantasy', 'Horror', 'Western', 'History','Thriller','Mystry'];
 
 
    useEffect(() => {
   
      const fetchMovies = async () => {
        const newGenreName={};
        for(let i=0;i<genreIds.length;i++){
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?with_genres=${genreIds[i]}&api_key=f140b5b40027642de9f677ae380251eb`,
            {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQwYjViNDAwMjc2NDJkZTlmNjc3YWUzODAyNTFlYiIsIm5iZiI6MTcyMzYwMTA5OC4wNjU3MTcsInN1YiI6IjY2ODI2NTg0YzAyNzgzYjJjNjM0YzgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N38wuzBua6x5oh2i-mQs5HpqMV0V-kCkT3_iRt0XbMA'
              },
            }
          );
          const data = await response.json();
          newGenreName[genreNames[i]]=data.results;
  
        }
        setMovies(newGenreName ||[]);
          setLoading(false);
        
      };
      fetchMovies();
    }, []);
   
    const emojis = ['🥹', '😡', '😔', '😜', '🥰', '😈', '🫠', '😨', '🥵', '😀', '😂', '😎', '😍', '🥳', '😇', '🤩'];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % emojis.length);
      }, 1000);
      
    }, [emojis.length]);
    
    useEffect(() => {
     
        const fetchArticles = async () => {
        
          const main = `http://www.omdbapi.com/?s=${username}&type=movie&apikey=2a427462`;
         
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
            setArticles(detailedMovies);
            console.log(detailedMovies);
          } 
         
          setLoading(false);
        };
    
        fetchArticles();
      }, [username]);
    return(
        <userContext.Provider value={{username,setUsername,moviename,setMoviename,articles,loading,setLoading,index, setIndex,movies, setMovies,genreNames,emojis}}>
            {children}
        </userContext.Provider>     
    )

}