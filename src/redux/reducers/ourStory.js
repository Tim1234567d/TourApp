import {ActionTypes} from "../contants/action-types";

const initialState ={
    setOurStory:[],
    isLoaded: false,
    
};

 export const ourStoryReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__OUR__STORY:
            return {...state,setOurStory:payload };
        case ActionTypes.FETCH__OUR__STORY:
            return {...state,setOurStory:payload, isLoaded: true, };

            default :
                return state
    } 
   

};







