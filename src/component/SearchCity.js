import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import {useDispatch} from 'react-redux'
import { APiCall } from "../redux/action";

const SearchCity = ({time}) => {
  const dispatch = useDispatch()
  const [city, setCity]= useState('')
  const inputEvent = (e)=>{
    setCity(e.target.value);
  }

  const btnClick = (e)=>{
    e.preventDefault();
    // const trimLo
    dispatch(APiCall(city.trim().toLowerCase()))
  }
  return (
    <>
      <div
        style={{ width: "15em", margin: "20px" }}
        className="forcase shadow border p-2 rounded"
      >
        <form>
          <input
            style={{ width: "94%", color:"white", background:'rgb(41, 40, 40) ' }}
            className="text-center border p-2 m-2 rounded"
            type="text"
            placeholder="Enter city name..."
            onChange={inputEvent}
          />
          <br />
          <button
          onClick={btnClick}
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
            className="fs-2"
          >
            at {time.hour}:{time.minut}{time.hour > 12 ? "PM" : "AM"}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchCity;
