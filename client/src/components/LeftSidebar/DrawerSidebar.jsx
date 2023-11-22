import React from 'react';
import './LeftSidebar.css';
import {NavLink} from 'react-router-dom';
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from "react-icons/ai";
import shorts from './shorts.png';
import {MdOutlineExplore,MdOutlineVideoLibrary,MdOutlineWatchLater,MdSubscriptions,} from "react-icons/md";
import { FaHistory } from "react-icons/fa";

function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_Sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_Sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_Sidebar_div">
            <p>
              <img
                src={shorts}
                width={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>
          <div className="icon_Sidebar_div">
            <p>
              <MdSubscriptions
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={'/library'} className="icon_Sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>
          <NavLink to={'/history'} className="icon_Sidebar_div">
            <p>
              <FaHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={'/yourvideos'} className="icon_Sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
          <NavLink to={'/watchlater'} className="icon_Sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={'/likedvideo'} className="icon_Sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
        </div>
        <div className="subScriptions_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
        </div>
      </div>
      <div
        className="container3_DrawerLeftSidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  )
}

export default DrawerSidebar