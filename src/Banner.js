import React from 'react'
import { useState, useEffect } from 'react'
import instance from './baseUrl'
import './Banner.css';


function Banner({fetchUrl}) {

    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
 
     //function to call api 
     async function getData() {
         const outData = await instance.get(fetchUrl)
         // console.log(result.data.results);
         setMovies(outData.data.results[
            Math.floor(Math.random()*outData.data.results.length-1)
         ])
     }
     useEffect(()=>{
      getData()},[]
     )
    //  console.log(movies);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+". . . .":str
    }
  return (
    <div className='banner' 
    style={{
        backgroundImage:`url(${base_url}${movies?.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        opacity:0.5
                

    }}
    >
        <div className='bannerContent'>
            <h1>{movies?.title}</h1>
            <h4>{movies?.overview}
              {truncate(movies?.overview,150)}
            </h4>
        </div>

        
    </div>
  )
}

export default Banner