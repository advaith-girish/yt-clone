import React from 'react'
import { useState,useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography, Stack,Box} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {Videos} from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const {id}=useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      setVideoDetail(data.items[0])});

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=>{
        console.log(data)
        setVideos(data.items)});
    },[id]);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`}
            controls/>
            <Typography color="#FFF" variant='h5' fontWeight="bold" p={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' p={2}
            sx={{color:'#fff'}}>
                <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                  <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'>
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction='row-reverse' spacing={2}>
                  <Typography variant='body1'>
                    {videoDetail?.statistics.viewCount} views
                  </Typography>
                  <Typography variant='body1'>
                    {videoDetail?.statistics.likeCount} likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box p={2} justifyContent='center' alignItems='center'>
        <Videos videos={videos}/>
      </Box>


    </Box>
  )
}

export default VideoDetail