import {ActionTypes} from "../contants/action-types";

const initialState = {
    blogItems: [],
    
}; 

 export const blogReducer = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__BLOG:
            return {...state,blogItems:payload };
        case ActionTypes.FETCH__BLOG:
            return {...state,blogItems:payload };

            default :
                return state
    }
    

}

export const selectedBlogReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED__BLOG:
        return { ...state, ...payload };
      case ActionTypes.REMOVE__SELECTED__BLOG:
        return {};
      default:
        return state;
    }
  };







