import React, { useState } from 'react';
import './CreateEditChanel.css';
import { useDispatch,useSelector} from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser';

function CreateEditChanel({setEditCreateChanelBtn}) {

    const CurrentUser = useSelector((state) => state.currentUserReducer)
    const [name, setName] = useState(CurrentUser?.result.name);
    const [desc,setDesc] = useState(CurrentUser?.result.desc);

    const dispatch = useDispatch();

    const handleSubmit = () =>{
        if(!name){
            alert("Plz Enter Name !");
        }else if(!desc) {
            alert("Plz Enter Description !");
        }else{
            dispatch(updateChanelData(CurrentUser?.result._id,{
                name:name,
                desc:desc,
            }));
            setEditCreateChanelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:CurrentUser?.result.email}))
            },5000);
        }
    };

  return (
    <div className='Container_CreateEditChanel'>
            <input type="submit" name="text" value={"X"} className='ibtn_x'
            onClick={()=>setEditCreateChanelBtn(false)}/>
        <div className='Container2_CreateEditChanel'>
            <h1>
                {CurrentUser?.result.name ? <>Edit</>:<>Create</>}
                Your Chanel
            </h1>
            <input type="text" 
                name="text" 
                placeholder="Enter Your Chanel Name" 
                className='ibox' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />
            <textarea type="text" 
                placeholder="Enter  Chanel Description" 
                rows={15}
                className='ibox' 
                value={desc} 
                onChange={(e)=>setDesc(e.target.value)}
            />
            <input type="submit" value={'submit'} className='ibtn'  onClick={handleSubmit}/>
        </div>
    </div>
  )
}

export default CreateEditChanel