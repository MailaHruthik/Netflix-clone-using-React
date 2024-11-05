import './App.css'
import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export const ContextId = createContext()
export function Cards_display({category, title}){

    let [movies_data, update_data] = useState([])

    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

    useEffect(()=>{
      getData()
    },[])
  
   async function getData(){
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGFiZmM1NDc1MmE1ZmViMzBjZWU1MGM2OWZmN2ZhMSIsIm5iZiI6MTczMDQ0ODAxMS44NTI5Nzc4LCJzdWIiOiI2NzI0ODk2YTAxNzRiOTkwOWNkZjFmMjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.elGxyCoB1mK86H3k6NtPZr5Vo_f2DoMF_rUCLFc9qiQ',
          accept: 'application/json'
        }
      })

      const data = response.data.results;
      update_data(data);
      
    }

    

return(
    <div>
    <h3 style={{color:'white', paddingLeft:'17px'}}>{title}</h3>
    <div className='cards-container'>
    {movies_data.map((ele)=>{
        return(
        <div style={{padding:'0'}}>
        <Link to={`/play/${ele.id}`}><img src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} className="card-img"></img></Link>
        <div><p style={{color:"white", fontSize:'small'}}>{ele.original_title}</p></div>
        </div>
        )
    })}
    </div>
   </div>
    
)
}