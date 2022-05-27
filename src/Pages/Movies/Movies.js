
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
// import Genres from '../../components/Genres';
// import useGenre from '../../hooks/useGenre';

const Movies=()=> {
    const [page,setPage]=useState(1);
    const[content,setContent]=useState([]);
    const [numOfPages, setNoOfPages] = useState();
    // const [selectedGenres, setSelectedGenres]= useState([]);
    // const [genres,setGenres] = useState([]);
    // const genreforURL = useGenre(selectedGenres);


    const fetchMovies=async ()=>{

       const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=664e759c938128b6f44f60ad652abcd9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`); // for genre add &with_genres=${genreforURL} at the end of url
       setContent(data.results);
       setNoOfPages(data.total_pages);
    }

    useEffect(()=>{
          fetchMovies() 
          // eslint-disable-next-line 
     },[page]); //for genre works we have to add use genreforURL as dependency
    

    return (
        <div>
        <span className='pageTitle'>Movies</span>
        {/* <Genres
        type='movie'
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
        /> */}
  
        <div className='trending'>
             {
                 content && content.map((c)=>(
                    <SingleContent
                     key={c.id} 
                     id={c.id} 
                     poster={c.poster_path} 
                     title={c.title || c.name}
                     date={c.first_air_date || c.release_date}
                     media_type='movie'
                     vote_average={c.vote_average}
                     />
                  )
                     
                 )}
        </div>
        {numOfPages > 1 && (
               <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        )}
        </div>
    )
}

export default Movies
