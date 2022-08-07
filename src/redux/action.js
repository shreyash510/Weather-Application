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

export const APiCall = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=28e1107da44a4e4406402748f062d353"
      );
      // console.log(response.data)
      dispatch({
        type: actionType.API_CALL,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: actionType.API_ERROR,
      });
    }
  };
};
