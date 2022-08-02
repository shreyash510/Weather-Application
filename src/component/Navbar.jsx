import "./nav.css";
import { useState } from "react";
import { actionMode } from "../redux/action";
import LightModeIcon from "@mui/icons-material/LightMode";
import {  useDispatch } from "react-redux";

const TopNavbar = () => {
  const dispatch = useDispatch();
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

  return (
    <>
      <nav>
        <div className="header mx-5 my-3">
          <h3 className="mt-2">Weather App</h3>
          <h1 onClick={modeBtn} className="border-0 bg-transparent mode">
            <LightModeIcon />
          </h1>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
