import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail,marginTop}) => {
  
  if(!channelDetail) return <div>Loading</div>
  console.log(channelDetail.id)
  return (
    <Box sx={{boxShadow:'none',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{xs:'356px',md:'320px'},
      height:'326px',
      margin:'auto',
      marginTop
    }}>

      <Link to={`/channel/${channelDetail.id.channelId}`}>
      <CardContent sx={{display:'flex',textAlign:'center',justifyContent:'center',backgroundColor:'#1e1e1e',flexDirection:'column'}}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} sx={{borderRadius:'50%',height:'180px',width:'180px',border:'1px solid #e3e3e3',mb:1}}/>
        <Typography variant='h6' fontWeight='bold' color='#FFF'>
          {channelDetail?.snippet?.title || 'Channel Title'}
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            <CheckCircle sx={{fontSize:12,color:'gray',mr:1}}/>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() || '0'} Subscribers
          </Typography>
        
          )}
      </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard