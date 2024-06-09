import axios from 'axios'
// require('dotenv').config()

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    url:BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '0e6c0830aamshad31e8c574bed90p1ab35cjsn1f6889d83b42',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}