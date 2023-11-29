import React from 'react';
import { GoogleLogout} from 'react-google-login';
import './Auth.css';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';

function Auth({User,setAuthBtn}) {
    const dispatch = useDispatch();
    const onLogoutSuccess = () => {
        dispatch(setCurrentUser(null));
        alert("Log out Succesful")
    }
  return (
    <div className='Auth_container' onClick={()=>setAuthBtn(false)}>
        <div className='Auth_container2'>
            <p className="User_Details">
                <div className='Chanel_logo_App'>
                    <p className="fstChar_logo_App">
                        {
                            User?.result.name ?
                            (<>
                            {User?.result.name.charAt(0).toUpperCase()}
                            </>):(<>
                                {User?.result.email.charAt(0).toUpperCase()}
                            </>)
                        }
                    </p>
                </div>
                <div className="email_Auth">{User?.result.email}</div>
            </p>
            <div className="btns_Auth">
                <input type="submit" className='btn_Auth' value="Create Your Chanel" />
                <div>
                    <GoogleLogout clientId={"248374223563-bv9tmktrv3pfgtfi3pt7hpb2bkg14eep.apps.googleusercontent.com"}
                    onLogoutSuccess={onLogoutSuccess}
                    render={(renderProps)=>(
                        <div onClick={renderProps.onClick} className='btn_Auth'>
                            <BiLogOut/> Log Out
                        </div>
                    )}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth