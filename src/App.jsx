import React, { useEffect } from 'react'
import { fetchVideos } from './modules/fetchVideos'

const App = () => {
  // useEffect(() => {
    fetchVideos().then((data) => {
      debugger
      let series = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    })
  // }, [])

  let image
   let seriesList = series.map(show => {
     image = show.content.images.coverart23.template
  })

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

