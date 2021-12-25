import {ActionTypes} from "../contants/action-types";

const initialState ={
    setTeamInfo:[], 
    isLoaded: false,
};


export const teamInfoReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__TEAM__INFO:
            return {...state,setTeamInfo:payload };
        case ActionTypes.FETCH__TEAM__INFO:
            return {...state,setTeamInfo:payload, isLoaded: true};

            default :
                return state
    } 
}

