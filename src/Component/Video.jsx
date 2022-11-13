import React from 'react'
import VideoCard from "./VideoCard.jsx"
import "../Style/Video.css"

const Video = ({Videos}) => {
  return (
    <div className="videos">
        {
            Videos.map((items,index)=>{
                return(
                    <VideoCard index={index} key={items.image} image={items.image} name={items.name}  />
                )
            })
        }
    </div>
  )
}

export default Video