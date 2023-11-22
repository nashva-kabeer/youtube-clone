import Nav from "./components/navbar/Nav";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./components/navbar/AllRoutes";
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
import { useState } from "react";

function App() {
  const [toggleDrawerSidebar,setToggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <>
    <Router>
    <Nav
    toggleDrawer={toggleDrawer}
    />
    
      <DrawerSidebar
      toggleDrawer={toggleDrawer}
      toggleDrawerSidebar={toggleDrawerSidebar}
      />
    
    <AllRoutes/>
    </Router>
    </>
  );
}

export default App;
