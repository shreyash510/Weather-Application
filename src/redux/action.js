import actionType from "./actionType";

export const mode = (mode)=>{
    return async (dispatch)=>{
        dispatch({
            type : actionType.MODE,
            payload: null
        })
    }
}