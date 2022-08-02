import './nav.css';
// import { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector, useDispatch } from 'react-redux';

function TopNavbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state)=>state.mode);
  console.log(mode);
    // const [mode, setMode] = useState('light')
    const modeBtn=()=>{
      console.log('click')
        // setMode(mode === "dark"?"light":"dark");
    }
    
  return (
    <>
    <nav>
        <div className="header mx-5 my-3">
          <h3 className='mt-2'>Weather App</h3>
          <h1 onClick={modeBtn} className="border-0 bg-transparent mode"><LightModeIcon/></h1>
        </div>
    </nav>
        
    </>
  );
}

export default TopNavbar;
