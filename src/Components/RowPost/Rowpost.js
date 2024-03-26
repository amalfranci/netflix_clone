import React,{useEffect,useState} from 'react'
import "./Rowpost.css"
import axios from '../../axios'
import {apiKey, imageUrl } from '../../constants'
import YouTube from 'react-youtube';



function Rowpost(props) {

    const [movies, setMovies] = useState([])
    const [urlId,setUrl]=useState('')

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log()
            setMovies(response.data.results)
            
        })

        
    }, [])

    const opts = {
      height: '390',
      width: '1200',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
        
    };

    const handleMovie = (id) => {

        axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response => {
              
            if (response.data.results.length !== 0)
            {
                setUrl(response.data.results[0])
            }
            else {
                console.log("empty array")
            }
          })
      }


  return (
      <div className='row'>
          <h2>{props.title}</h2>
          <div className='posters'>
              {movies.map((obj) =>
       
                 
                  <div>
                       <img onClick={() => handleMovie(obj.id)
                      
                      
                  } className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl + obj?.backdrop_path}`}></img>

                      <h4>{obj.title || obj.name}</h4>    

                  </div>
                  
                  )}
          </div>
         {urlId && <YouTube opts={opts} videoId={urlId.key} />} 

    </div>
  )
}

export default Rowpost