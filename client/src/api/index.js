import axios from 'axios';
const API = create({baseURL : `http://localhost:5000/`})
API.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})