import React from 'react';
import './Nav.css';
import logo from './logo.ico';
import SearchBar from './searchbar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi'

function Nav({toggleDrawer}) {
    //const CurrentUser = null;
      const CurrentUser = {
        result: {
        email: "abzxy50312@gmail.com",
        joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
  return (
    <div className='Container_Navbar'>
        <div className="Burger_Logo_Navbar">
            <div className='burger' onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='logo_div_navbar'>
                <img src={logo} alt="logo" />
                <p className='logo_title_navbar'>YouTube</p>
            </div>
        </div>
        <SearchBar/>
        <RiVideoAddLine size={22} className='Vid_bell_Navbar'/>
        <div className="apps_Box">
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
        </div>
        <IoMdNotificationsOutline size={22} className='Vid_bell_Navbar'/>
        <div className="Auth_Cont_Navbar">
            {CurrentUser ? (
                <>
                <div className="Chanel_logo_App">
                    <p className='fstChar_logo_App'>
                        {CurrentUser?.result.name ? (
                            <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                        ):(
                            <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                        )}
                    </p>
                </div>
                </>
            ) : (
                <p className="Auth_btn">
                <BiUserCircle size={22}/>
                <b>Sign in </b>
            </p>
            )
            }
            
        </div>
    </div>
  )
}

export default Nav