import React, { useEffect } from 'react'
import { fetchVideos } from './modules/fetchVideos'

const App = () => {
  let series
  // useEffect(() => {
    fetchVideos().then((data) => {
      debugger
      series = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    })
  //  }, [])

  let seriesList
  if(series){
   seriesList = series.map(show => {
     return (
     <div>
       <img
       src={show.content.images.landscape.url}
       alt={show.content.title}
       />
     </div>
     )
  })
}

  return (
    <div>
      <div id="header">
        <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" id="image" />
      </div>
      <div>
        {seriesList}
      </div>
      <div id="footer" />

    </div>
  )
}


export default App

