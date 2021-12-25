import {ActionTypes} from "../contants/action-types";

const initialState = {
    topPlaceItems: [],
    isLoaded: false,
     
}; 
  
const topPlacesReducer = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__TOPPLACES:
            return {...state,topPlaceItems:payload };
        case ActionTypes.FETCH__TOPPLACES:
            return {...state,topPlaceItems:payload, isLoaded:true, };

            default : 
                return state
    } 
   

}

export const selectedTopPlaceReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED__TOPPLACE:
        return { ...state, ...payload };
      case ActionTypes.REMOVE__SELECTED__TOPPLACE:
        return {};
      default:
        return state;
    }
  };

export default topPlacesReducer;





