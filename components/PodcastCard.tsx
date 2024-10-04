import Image from 'next/image'
import React from 'react'

const PodcastCard = ({title, description, imgURL, podcastid}:{
    title:string,
    description: string,
    imgURL: string,
    podcastid:number
}) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image 
            src={imgURL} 
            height={250} 
            width={250} 
            alt={title}/>
        </figure>
        <div className='flex flex-col'>
            <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
            <h2 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h2>
            <p>{podcastid}</p>
        </div>
    </div>
  )
}

export default PodcastCard