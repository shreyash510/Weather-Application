import actionType from "./actionType";

export const actionMode = (mode)=>{
    return async (dispatch)=>{
        dispatch({
            type : actionType.MODE,
            payload: mode
        })
    }
}