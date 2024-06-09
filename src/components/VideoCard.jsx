import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoChannelTitle,demoVideoTitle } from '../utils/constants'

const VideoCard = ({video:{id:videoId,snippet}}) => {
//videoId contains video id and snippet contains video details
console.log(videoId.videoId)  
return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none'}}>
      <Link to={videoId?`/video/${videoId.videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        style={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}} />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
      <Link to={videoId?`/video/${videoId.videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
          {snippet?.title || demoVideoTitle}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight="bold" color="gray">
          <CheckCircle sx={{fontSize:12,color:'gray',mr:1}}/>
          {snippet?.channelTitle || demoChannelTitle}
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard