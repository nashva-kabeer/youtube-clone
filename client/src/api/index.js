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

export const viewVideo = (id) =>API.patch(`/video/view/${id}`)

export const addToLikedVideo = (likedVideoData) => API.post('/video/likedvideo',likedVideoData);

export const getAllLikedVideos = () => API.get('/video/getalllikedvideos');

export const deleteLikedVideo = (videoId,viewer) => API.delete(`/video/deletelikedvideo/${videoId}/${viewer}`);

export const addToWatchLater = (watchLaterData) => API.post('/video/watchlater',watchLaterData);

export const getAllWatchLater = () => API.get('/video/getallwatchlater');

export const deleteWatchLater = (videoId,viewer) => API.delete(`/video/deletewatchlater/${videoId}/${viewer}`);

export const addToHistory = (HistoryData) => API.post('/video/history',HistoryData);

export const getAllHistory = () => API.get('/video/getallhistory');

export const clearHistory = (userId) => API.delete(`/video/clearhistory/${userId}`);

export const postComment = (commentData) => API.post('/comment/post',commentData);

export const editComment = (id,commentBody) => API.patch(`/comment/edit/${id}`,{commentBody});

export const getAllComment = () => API.get('/comment/get');

export const deleteComment = (id) => API.delete(`/comment/deletecomment/${id}`);


