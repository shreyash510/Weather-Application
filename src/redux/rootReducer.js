import { combineReducers } from "redux";
import modeReducer from "./reducer";

const rootReducer = combineReducers({
    mode : modeReducer
})

export default rootReducer;