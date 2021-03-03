import axios from 'axios';

const url = "https://lopez-blogapi.herokuapp.com/posts";

//READ
export const fetchPosts = () => axios.get(url);
export const fetchPost = (id) => axios.get(`${url}/${id}`);

//CREATE
export const createPost = (newPost) => axios.post(url , newPost);

//UPDATE
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

//DELETE
export const deletePost = (id) => axios.delete(`${url}/${id}`);