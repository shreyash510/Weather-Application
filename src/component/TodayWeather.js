import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const TodayWeather = ({apiData}) => {
  return (
    <>
      <div
        style={{ width: "15em", margin: "20px" }}
        className="today border rounded p-2 shadow"
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
                <WbSunnyIcon className="fs-1"/>
              )}
            </p>
            <p className="fs-5">{apiData.data.list[0].weather[0].description}</p>
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
    </>
  );
};

export default TodayWeather;
