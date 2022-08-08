import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const NextDaysWeather = ({ apiData }) => {
  let myObj = {};

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weatherList = apiData.data.list;
  const allDate = weatherList.map((v) => v.dt_txt);

  function uniqueDate(arr) {
    for (let i = 0; i < arr.length; i++) {
      const currDate = new Date(arr[i]);
      const dt = currDate.getDay();

      if (dt in myObj) {
      } else {
        myObj[dt] = i;
      }
    }
    return myObj;
  }
  const result = uniqueDate(allDate);

  const allValues = Object.values(result);
  const allDataUsingId = allValues.map((v) => {
    const currDate = new Date(weatherList[v].dt_txt);
    const dt = currDate.getDay();
    return dt;
  });

  const allListDetails = allValues.map((v) => {
    return weatherList[v];
  });

  return (
    <>
      <div
        style={{ width: "18em", margin: "20px" }}
        className="shadow nextDays border rounded"
      >
        <h5 className="text-center py-3">
          <CalendarTodayIcon /> Next 7 Days
        </h5>
        <div className="nextDay px-3">
          {allListDetails.map((v, i) => {
            return (
              <div
                key={i}
                // style={{ margin: "-5px" }}
                className="d-flex justify-content-around "
              >
                <p>{dayList[allDataUsingId[i]]}</p>
                <p>
                  {v.weather[0].main === "Clouds" ? (
                    <ThunderstormOutlinedIcon />
                  ) : v.weather[0].main === "Rain" ? (
                    <CloudIcon />
                  ) : (
                    <WbSunnyIcon />
                  )}
                </p>
                <p>
                  <ArrowDropUpOutlinedIcon />
                  {Math.round(v.main.temp_max - 273.15)}°C
                </p>
                <p>
                  <ArrowDropDownOutlinedIcon />
                  {Math.round(v.main.temp_min - 273.15)}°C
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NextDaysWeather;
