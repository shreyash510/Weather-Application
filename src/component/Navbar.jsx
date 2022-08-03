import "./nav.css";
import { useEffect, useState } from "react";
import { actionMode } from "../redux/action";
import LightModeIcon from "@mui/icons-material/LightMode";
import {  useDispatch } from "react-redux";
import CloudIcon from '@mui/icons-material/Cloud';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const TopNavbar = () => {
  const dispatch = useDispatch();
  const [liveDate, setLiveDate] = useState("")
  const [mode, setMode] = useState({
    background: "#292828",
    color: "white",
  });

  const modeBtn = () => {
    setMode(
      mode.color === "white"
        ? {
            background: "white",
            color: "#292828",
          }
        : {
            background: "#292828",
            color: "white",
          }
    );
    dispatch(actionMode(mode));
    // console.log(mode);
  };

  const DateAndTime=()=>{
    const currDate = new Date();
    const date = currDate.getDate();
    const month = currDate.getMonth();
    const year = currDate.getFullYear();
    const hour = currDate.getHours();
    const minute = currDate.getMinutes();
    const clock = hour>12?"AM":"PM";

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
    const cMonth = months[month];
    const liveDate = `${cMonth} ${date}, ${year} at ${hour}:${minute}${clock}`
    return liveDate
  }
  useEffect(()=>{
    setLiveDate(DateAndTime())
  },[liveDate])

  return (
    <>
      <nav>
        <div className="text-center header my-3">
          <h5 className="text-center mt-2">Weather<br/> <CloudIcon/></h5>
          <p id="date" className="text-center my-2"><CalendarTodayIcon/> {liveDate}</p>
          <h1 onClick={modeBtn} className="border-0 bg-transparent mode">
            <LightModeIcon />
          </h1>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
