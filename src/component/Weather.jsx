import React, { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudIcon from "@mui/icons-material/Cloud";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { useSelector, useDispatch } from "react-redux";
import { APiCall } from "../redux/action";

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

  console.log(time);
  useEffect(()=>{
    setTime(currentTime)
  },[])

  const fetchResources = () => {
    dispatch(APiCall());
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const { loading, isError, apiData } = useSelector((state) => state.apiCall);
  console.log(apiData);

  if (loading) {
    return <div>Loading......</div>;
  }

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
            <div
              style={{ width: "15em", margin: "20px" }}
              className="today border rounded p-2"
            >
              <h5 className="text-center">
                <CalendarTodayIcon /> Today
              </h5>
              <div className="grp d-flex justify-content-around">
                <div className="left ">
                  <p>
                    {apiData.data.list[0].main.temp} <strong>K</strong>
                  </p>
                  <p>
                    {Math.round(
                      1.8 * (apiData.data.list[0].main.temp - 273) + 32
                    ).toFixed(2)}{" "}
                    °F
                  </p>
                  <p>
                    {apiData.data.list[0].main.humidity}% <OpacityTwoToneIcon />
                  </p>
                  <p>
                    {apiData.data.list[0].main.pressure} <CompareArrowsIcon />
                  </p>
                  <p>
                    {apiData.data.list[0].wind.speed}m/s <AirOutlinedIcon />
                  </p>
                </div>
                <div className="right">
                  <p>
                    {apiData.data.list[0].weather[0].main === "Clouds" ? (
                      <CloudIcon className="fs-1" />
                    ) : apiData.data.list[0].weather[0].main === "Rain" ? (
                      <ThunderstormIcon className="fs-1" />
                    ) : (
                      "Other"
                    )}
                  </p>
                  <p>{apiData.data.list[0].weather[0].description}</p>
                  <p className="fs-1">
                    {Math.ceil(apiData.data.list[0].main.temp - 273.15)}
                    °C
                  </p>
                </div>
              </div>
              <hr />
              <div className="temp d-flex justify-content-around">
                <p>
                  <ThermostatIcon />
                </p>
                <p>
                  <ArrowDropUpOutlinedIcon />
                  {Math.ceil(apiData.data.list[0].main.temp_max - 273.15)} °C
                </p>
                <p>
                  <ArrowDropDownOutlinedIcon />
                  {Math.ceil(apiData.data.list[0].main.temp_min - 273.15)} °C
                </p>
              </div>
            </div>

            <div
              style={{ width: "15em", margin: "20px" }}
              className="forcase border p-2 rounded"
            >
              <form>
                <input
                  style={{ width: "94%" }}
                  className="text-center bg-transparent border p-2 m-2 rounded"
                  type="text"
                  placeholder="Enter city name..."
                />
                <br />
                <button
                  style={{ marginLeft: "36%" }}
                  className="p-2 bg-light border rounded text-dark "
                >
                  Search
                </button>
              </form>

              <div className="forcaset p-3 pt-5">
                <h3 className="float-end">
                  <AcUnitOutlinedIcon /> forecast
                </h3>
                <br />
                <br />
                <p>
                  <SearchOutlinedIcon /> Search Time :{" "}
                </p>
                <p
                  style={{ fontFamily: "sans-serif", marginTop: "-20px" }}
                  className="fs-1"
                >
                  at {time.hour}:{time.minut} {(time.hour>12)?"PM":"AM"}
                  
                </p>
              </div>
            </div>
            
            <div
              style={{ width: "18em", margin: "20px" }}
              className="nextDays border rounded"
            >
              <h5 className="text-center py-3">
                <CalendarTodayIcon /> Next 7 Days
              </h5>
              <div className="nextDay px-3">
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around "
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
                <div
                  style={{ margin: "-5px" }}
                  className="d-flex justify-content-around"
                >
                  <p>sunday</p>
                  <p>
                    <ThunderstormOutlinedIcon />
                  </p>
                  <p>
                    <ArrowDropDownOutlinedIcon />
                    32.C
                  </p>
                  <p>
                    <ArrowDropUpOutlinedIcon />
                    32.C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Weather;
