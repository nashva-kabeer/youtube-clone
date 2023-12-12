import axios from 'axios';

const API = axios.create({ baseURL : `http://localhost:5000/` })
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login =(authData)=>API.post('/user/login',authData);

export const updateChanelData = (id,updateData) => API.patch(`/user/update/${id}`, updateData);

export const fetchAllChanel = () =>API.get('/user/getAllChanels');

export const uploadVideo = (fileData,fileOptions) => API.post('/video/uploadvideo',fileData,fileOptions);

export const getVideos = () => API.get('/video/getvideos');

export const likeVideo = (id,Like) => API.patch(`/video/like/${id}`,{Like})

export const addToLikedVideo = (likedVideoData) => API.post('/video/likedvideo',likedVideoData);

export const getAllLikedVideos = () => API.get('/video/getalllikedvideos');