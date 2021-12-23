import {ActionTypes} from '../contants/action-types'
import api from '../../API/api';



export const  fetchTopPlaces = () =>  async (dispatch) => {
  const response = await api.get("/topPlaces");

  dispatch({type:ActionTypes.FETCH__TOPPLACES, payload:response.data})
  
};


export const  fetchSelectedTopPlace = (id) =>  async (dispatch) => {
  const response = await api.get(`/topPlaces/${id}`);

  dispatch({type:ActionTypes.SELECTED__TOPPLACE, payload:response.data})
  
};


export const  setTopPlaces = (topPlacesItems) => {
  return{
    type:ActionTypes.SET__TOPPLACES,
    payload:topPlacesItems,
  };
    
};

export const selectedTopPlace = (topPlaceItem) => {
  return {
    type: ActionTypes.SELECTED__TOPPLACE,
    payload: topPlaceItem,
  };
};

export const removeSelectedToplace = () => {
  return {
    type: ActionTypes.REMOVE__SELECTED__TOPPLACE,
  };
};