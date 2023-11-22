import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Library from '../../pages/Library/Library';

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/library" element={<Library/>} />
    </Routes>
  )
}

export default AllRoutes