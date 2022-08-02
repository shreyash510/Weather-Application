import actionType from "./actionType";

const initial = {
    background : "#292828",
    color : "white"
}

const modeReducer = (state = initial, action)=>{
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

export default modeReducer;

