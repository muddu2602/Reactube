import axios from 'axios';

const key = 'AIzaSyD1gUbIbrsHDvCql2y3UmbsHTFLvrLAe4w';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 25,
        key : key,
        type : 'video'
    }

    
});