import actionType from "./actionType";

const initial = {
    background : "#292828",
    color : "white"
}

const apiInitial = {
    loading:false,
    isError:false,
    products:null, 
}

export const modeReducer = (state = initial, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionType.MODE:
            return {
                payload
            }
        default :
            return state;
    }
}

export const callApi = (state = apiInitial, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionType.API_CALL:
            return {
                ...state,
                loading:false,
                isError:false,
                apiData: payload
            }
        default:
            return state
    }
}



