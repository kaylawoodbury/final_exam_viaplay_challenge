import React from 'react'
import axios from 'axios'

const fetchVideos = async () => {
  try {
    debugger
  let response = await axios.get(
    `https://content.viaplay.se/pc-se/serier/samtliga._embedded['viaplay:blocks'][0]._embedded['viaplay:products']`
  )
  debugger
  return response.data
  } catch (error) {
    return error
  }
}

export { fetchVideos }