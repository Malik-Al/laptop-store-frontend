import React from 'react';
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/product/ProductList/ProductList";
import ProductDetail from "./components/product/ProductDetail/ProductDetail";

const App = () => {
    return (

        <Routes>
            <Route path='/detail' element={<ProductDetail/>}/>
            <Route path='/' element={<ProductList/>}/>
        </Routes>

    );
};

export default App;