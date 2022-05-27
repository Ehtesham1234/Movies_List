import './Trending.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';


const Trending=()=> {
    const [content,setContent] = useState([]);
    const[page,setPage]=useState(1);

    const fetchTrending= async ()=>{
          const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=664e759c938128b6f44f60ad652abcd9&page=${page}`
          );
          
          setContent(data.results);
  
        };


        useEffect(()=>{
           fetchTrending();
           // eslint-disable-next-line
        },[page]);

    return (
        <div>
        <span className='pageTitle'>Trending</span>
        <div className='trending'>
             {
                 content && content.map((c)=>(
                    <SingleContent
                     key={c.id} 
                     id={c.id} 
                     poster={c.poster_path} 
                     title={c.title || c.name}
                     date={c.first_air_date || c.release_date}
                     media_type={c.media_type}
                     vote_average={c.vote_average}
                     />
                  )
                     
                 )}
        </div>
        <CustomPagination setPage={setPage}/>
        </div>
    );
}

export default Trending
