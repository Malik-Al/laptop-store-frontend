import React from 'react';
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/product/ProductList/ProductList";
import ProductDetail from "./components/product/ProductDetail/ProductDetail";
import ProductCreate from "./components/product/productCreate/ProductCreate";
import ProductUpdate from "./components/product/productUpdate/ProductUpdate";

const App = () => {
    return (
        <Routes>
            <Route path='/update' element={<ProductUpdate/>}/>
            <Route path='/create' element={<ProductCreate/>}/>
            <Route path='/detail' element={<ProductDetail/>}/>
            <Route path='/' element={<ProductList/>}/>
        </Routes>

    );
};

export default App;