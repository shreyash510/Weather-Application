import TopNavbar from "./component/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
    </div>
  );
}

export default App;
