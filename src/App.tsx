import React from 'react';
import {Route, Routes} from "react-router-dom"
import LaptopList from "./pages/laptop/LaptopList/LaptopList";
import LaptopDetail from "./pages/laptop/LaptopDetail/LaptopDetail";
import LaptopCreate from "./pages/laptop/LaptopCreate/LaptopCreate";
import LaptopUpdate from "./pages/laptop/LaptopUpdate/LaptopUpdate";
import UserLogin from "./components/auth/login/UserLogin";
import UserRegistration from "./components/auth/registration/UserRegistration";
import Profile from "./pages/Profile";


const App = () => {


    return (
        <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/registration' element={<UserRegistration/>}/>
            <Route path='/login' element={<UserLogin/>}/>
            <Route path='/update' element={<LaptopUpdate/>}/>
            <Route path='/create' element={<LaptopCreate/>}/>
            <Route path='/detail' element={<LaptopDetail/>}/>
            <Route path='/' element={<LaptopList/>}/>
        </Routes>

    );
};

export default App;