import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector, useDispatch } from "react-redux";
import { APiCall } from "../redux/action";
import TodayWeather from "./TodayWeather";
import SearchCity from "./SearchCity";
import NextDaysWeather from "./NextDaysWeather";

const Weather = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState({});

  const currentTime = () => {
    const currDate = new Date();
    const h = currDate.getHours();
    const minute = currDate.getMinutes();
    return {
      hour: h,
      minut: minute,
    };
  };

  useEffect(() => {
    setTime(currentTime);
  }, []);

  const fetchResources = () => {
    dispatch(APiCall());
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const { loading, isError, apiData } = useSelector((state) => state.apiCall);
  // console.log(apiData);

  if (!loading && isError) {
    return (
      <div style={{ border: "1px solid " }}>
        <p> Network Error </p>
        <button onClick={fetchResources}> try again </button>
      </div>
    );
  }

  if (apiData && !isError && !loading) {
    return (
      <>
        <h1 className="text-center">
          <LocationOnOutlinedIcon style={{ transform: "scale(1.8)" }} />
          {apiData.data.city.name} ({apiData.data.city.country})
        </h1>
        <main className="w-100 d-flex justify-content-center">
          <div className="d-flex flex-wrap">
            <TodayWeather apiData={apiData}/>
            <SearchCity time={time}/>
            <NextDaysWeather apiData={apiData}/>
          </div>
        </main>

        <footer className ="text-center">
          <p>Created by Shreyash Kolhe</p>
        </footer>
      </>
    );
  }
};

export default Weather;
