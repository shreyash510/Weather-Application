import axios from "axios";
import actionType from "./actionType";

export const actionMode = (mode) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.MODE,
      payload: mode,
    });
  };
};

export const APiCall = (city) => {
  // console.log(city==undefined?true:false)
  const weather = city===undefined?'https://api.openweathermap.org/data/2.5/forecast?q=ahmednagar&appid=28e1107da44a4e4406402748f062d353' :
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=28e1107da44a4e4406402748f062d353`
  return async (dispatch) => {
    try {
      const response = await axios.get(
        weather
      );
      // console.log(response.data)
      dispatch({
        type: actionType.API_CALL,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: actionType.API_ERROR,
        payload:true
      });
    }
  };
};
