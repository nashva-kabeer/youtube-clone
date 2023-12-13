import * as api from "../api";


export const uploadVideo =(videoData)=>async(dispatch)=>{
    try {
        const {fileData,fileOptions} = videoData;
        const {data} = await api.uploadVideo(fileData,fileOptions)
        dispatch({type:'POST_VIDEO',data})
        dispatch(getAllVideos())
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
    }
}

export const getAllVideos =()=>async(dispatch)=>{
    try {
        const {data} =await api.getVideos();
        dispatch({type:"FETCH_ALL_VIDEOS",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const likeVideo = (likeData) => async(dispatch) => {
    try {
        const {id,Like} = likeData;
        const {data} = await api.likeVideo(id,Like);
        dispatch({type:"POST_LIKE",payload:data});
        dispatch(getAllVideos());
    } catch (error) {
        console.log(error)
    }
}

export const viewVideo = (viewData) => async(dispatch) => {
    try {
        const {id} = viewData;
        const {data} = await api.viewVideo(id)
        dispatch({type:'POST_VIEWS',data})
        dispatch(getAllVideos())
    } catch (error) {
        console.log(error)
    }
}

