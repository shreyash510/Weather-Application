import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudIcon from "@mui/icons-material/Cloud";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Weather = () => {
  return (
    <>
    <h1 className="text-center"><LocationOnOutlinedIcon style={{transform: "scale(1.8)"}}/> Ahmednagar</h1>
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
                <p className="">
                  305.0 <strong>K</strong>
                </p>
                <p className="">89.4 °F</p>
                <p className="">
                  42% <OpacityTwoToneIcon />
                </p>
                <p className="">
                  81% <CloudOutlinedIcon />
                </p>
                <p className="">
                  3.02m/s <AirOutlinedIcon />
                </p>
              </div>
              <div className="right">
                <p>
                  <CloudIcon className="fs-1" />
                </p>
                <p>
                  Broken
                  <br /> Clouds
                </p>
                <p className="fs-1">32.C</p>
              </div>
            </div>
            <hr />
            <div className="temp d-flex justify-content-around">
              <p>
                <ThermostatIcon />
              </p>
              <p>
                <ArrowDropDownOutlinedIcon />
                34 °C
              </p>
              <p>
                <ArrowDropUpOutlinedIcon />
                34 °C
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
                at 3.08PM
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
};

export default Weather;
