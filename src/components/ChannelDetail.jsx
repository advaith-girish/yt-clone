import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos , ChannelCard} from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  const {id}=useParams();

  useEffect(() => {
    const fetchData = async () => {
      const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(channelData?.items[0]);
  
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(videosData?.items);
    };
  
    fetchData();
  }, [id]);

console.log("all? ",channelDetail,videos)

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'blue',zIndex:10,height:'300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-100px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box  sx={{mr: {sm:'100px'}}}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail