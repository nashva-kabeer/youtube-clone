import React ,{useState} from 'react';
import './SearchBar.css';
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';
import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function  SearchBar () {
  const[searchQuery,setsearchQuery] = useState("");
  const[searchList,setsearchList] = useState(false);
  const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m.videoTitle);
  // const TitleArray = ["videos","Animation videos","Movies","Songs"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="Search_div">
                <input type='text' className='iBox_SearchBar' placeholder='Search' 
                onChange={e=>setsearchQuery(e.target.value)} 
                value={searchQuery}
                onClick={e=>setsearchList(true)}/>
                <Link to={`/search/${searchQuery}`}>
                <FaSearch className='SearchIcon_SearchBar' onClick={e=>setsearchList(false)}/>
                </Link>
                <BsMicFill className='MicIcon_SearchBar'/>
                {searchQuery&& searchList&&
                <SearchList 
                setsearchQuery={setsearchQuery}
                TitleArray={TitleArray}/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default  SearchBar;