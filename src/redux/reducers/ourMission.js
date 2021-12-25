import {ActionTypes} from "../contants/action-types";

const initialState ={
    setOurMission:[],
    isLoaded: false,

};

 export const ourMissionReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__OUR__MISSION:
            return {...state,setOurMission:payload };
        case ActionTypes.FETCH__OUR__MISSION:
            return {...state,setOurMission:payload, isLoaded: true, };

            default :
                return state
    } 
   

};







