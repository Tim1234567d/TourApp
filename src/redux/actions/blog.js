import {ActionTypes} from '../contants/action-types'
import api from '../../API/api';

 
export const  fetchBlog = () =>  async (dispatch) => {
  const response = await api.get("/blogItems");

  dispatch({type:ActionTypes.FETCH__BLOG, payload:response.data})
  
}; 
 

export const  fetchSelectedBlog = (id) =>  async (dispatch) => {
  const response = await api.get(`/blogItems/${id}`);

  dispatch({type:ActionTypes.SELECTED__BLOG, payload:response.data})
  
};  

export const  setBlog = (blogItems) => {
  return{
    type:ActionTypes.SET__BLOG,
    payload:blogItems,
  };
    
}; 

export const selectedBlog = (blogItem) => {
  return {
    type: ActionTypes.SELECTED__BLOG,
    payload: blogItem,
  };
}; 

export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE__SELECTED__BLOG,
  };
}; 