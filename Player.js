import { useEffect, useState } from 'react'
import back from './Assets/back_arrow_icon.png'
import './palyer.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Palyer(){
    const {id} = useParams()
    let [embed_id, set_embed_id] = useState("")
    useEffect(
        ()=>{
            getClip()
        },[]
    )
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`

    async function getClip(){
     const clip_data =  await axios.get(url,  {headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGFiZmM1NDc1MmE1ZmViMzBjZWU1MGM2OWZmN2ZhMSIsIm5iZiI6MTczMDQ0ODAxMS44NTI5Nzc4LCJzdWIiOiI2NzI0ODk2YTAxNzRiOTkwOWNkZjFmMjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.elGxyCoB1mK86H3k6NtPZr5Vo_f2DoMF_rUCLFc9qiQ',
            'accept': 'application/json'
        }})
        const data_id = clip_data.data.results[0].key
        set_embed_id(data_id)
    }
    return(
        <div className="Play">
          <Link to="/app"> <img src={back} style={{width:'40px', height:'40px', marginLeft:'30px', marginTop:'30px'}}></img></Link> 
            <iframe style={{width:'80%', height:'90vh', marginTop:'20px', marginLeft:'40px'}} src = {`https://www.youtube.com/embed/${embed_id}`} frameBorder="0"
    allow="autoplay; encrypted-media; fullscreen"
    allowFullScreen
    title="YouTube Video"></iframe>
        </div>
    )
}