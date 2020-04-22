import React from 'react'
import axios from 'axios'

const fetchVideos = async () => {
  try {
    debugger
  let response = await axios.get(
    `https://content.viaplay.se/pc-se/serier/samtliga`
  )
  debugger
  return response.data
  } catch (error) {
    debugger
    return error
  }
}

export { fetchVideos }