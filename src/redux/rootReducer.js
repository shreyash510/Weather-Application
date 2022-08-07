import { combineReducers } from "redux";
import {modeReducer, callApi} from "./reducer";

const rootReducer = combineReducers({
    mode : modeReducer,
    apiCall : callApi
})

export default rootReducer;