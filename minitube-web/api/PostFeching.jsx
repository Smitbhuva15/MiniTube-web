import axios from 'axios';


 
const api = axios.create({
    baseURL:'http://localhost:5000'
  });
  

export const getPost=()=>{
    return api.get("/videos");
}

export const getSingelPost=(id)=>{
  return api.get(`/videos/${id}`);
}

export const postNewData=(Post)=>{
  return api.post("/videos",Post)
}

export const deletePost=(id)=>{
  return api.delete(`/videos/${id}`);
}

export const updateNewData=(id,Post)=>{
  return api.put(`/video/${id}`,Post);
}

