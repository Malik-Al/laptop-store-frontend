import React from 'react';
import {Route, Routes} from "react-router-dom"
import LaptopList from "./components/laptop/LaptopList/LaptopList";
import LaptopDetail from "./components/laptop/LaptopDetail/LaptopDetail";
import LaptopCreate from "./components/laptop/LaptopCreate/LaptopCreate";
import LaptopUpdate from "./components/laptop/LaptopUpdate/LaptopUpdate";

const App = () => {
    return (
        <Routes>
            <Route path='/update' element={<LaptopUpdate/>}/>
            <Route path='/create' element={<LaptopCreate/>}/>
            <Route path='/detail' element={<LaptopDetail/>}/>
            <Route path='/' element={<LaptopList/>}/>
        </Routes>

    );
};

export default App;