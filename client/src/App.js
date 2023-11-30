import Nav from "./components/navbar/Nav";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./components/navbar/AllRoutes";
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
import { useEffect, useState } from "react";
import CreateEditChanel from "./pages/Chanel/CreateEditChanel";
import { useDispatch } from "react-redux";
import { fetchAllChanel } from "./actions/chanelUser";

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllChanel());
  }, [dispatch])
  


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

 const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)


  return (
    <>
    <Router>
      {
        EditCreateChanelBtn &&
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      }
      <Nav
      setEditCreateChanelBtn={setEditCreateChanelBtn}
      toggleDrawer={toggleDrawer}
      />
      
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      
      <AllRoutes setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    </Router>
    </>
  );
}

export default App;
