import "./App.css";
import TopNavbar from "./component/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Weather from "./component/Weather";

function App() {
  const mode = useSelector((state) => state.mode.payload);
  useEffect(() => {
    document.body.style.backgroundColor =
      mode !== undefined ? mode.background : "#292828";
    document.body.style.color = mode !== undefined ? mode.color : "white";
  }, [mode]);
  return (
    <div className="App">
      <TopNavbar />
      <Weather/>
    </div>
  );
}

export default App;
