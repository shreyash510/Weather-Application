import "./App.css";
import TopNavbar from "./component/Navbar";
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state)=>state.mode);  
  return (
    <div className="App">
      <Helmet>
        <style>{
        "body {background-color:#292828; color:white;}"
        }</style>
      </Helmet>
      <TopNavbar  />
    </div>
  );
}

export default App;
