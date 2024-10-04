import React from 'react'

const Podcastdetails = ({params}: {params : {podcastid: string}}) => {
  return (
     <p className='text-black'>Podcast Details for {params.podcastid}</p>
  )
}

export default Podcastdetails