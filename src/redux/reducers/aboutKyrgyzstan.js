import {ActionTypes} from "../contants/action-types";

const initialState ={
    setAboutKyrgyzstan:[]
    
};

 const aboutKyrgyzstanReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__ABOUT__KYRGYZSTAN:
            return {...state,setAboutKyrgyzstan:payload };
        case ActionTypes.FETCH__ABOUT__KYRGYZSTAN:
            return {...state,setAboutKyrgyzstan:payload };

            default :
                return state
    } 
   

};
export default aboutKyrgyzstanReduser;






