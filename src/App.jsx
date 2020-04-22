import React, { useEffect } from 'react'
import { fetchVideos } from './modules/fetchVideos'

const App = () => {
  
  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <div>
      <div id="header">
        <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" id="image"/>
      </div>

    </div>
  )
}

export default App

