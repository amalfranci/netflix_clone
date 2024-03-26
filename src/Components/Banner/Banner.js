import React, { useEffect,useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {apiKey,imageUrl} from '../../constants'

function Banner() {

    const [Movie,setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {
           
            setMovie(response.data.results[0])
         })
    }, []) 
    

  return (
      <div style={{ backgroundImage: `url(${Movie ?imageUrl+Movie.backdrop_path : ""})` }}  className='Banner'>
          <div className='content'>
              <h1 className='title'>{Movie?.title}</h1>
              {   console.log(Movie)}
              <div className='banner_button'>
                  <button className='button'>Play</button>
                  <button className='button'>MyList</button>
                
                  
              </div>
              <h1 className='description'>{Movie?.overview}</h1>
              
              
          </div>
          <div className='fade_bottom'></div>
      
    </div>
  )
}
export default  Banner
