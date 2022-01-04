import React, {useEffect} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchProduct} from "../../../store/action-creators/product";
import ButtonAppBar from "../../../layouts/ButtonAppBar";




const ProductList = () => {
    const {products, loading, error} = useTypeSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    if(loading){
        return <div>Идет загрузка</div>
    }
    if(error){
        return <div>{error} Произошла ошибка</div>
    }


    return (
        <>
            <ButtonAppBar>
                <div style={{display: 'flex', flexWrap: "wrap"}}>
                    {products.map((product, id) =>
                        <ProductItem key={id} product={product}/>
                    )}
                </div>
            </ButtonAppBar>
        </>

    );
};

export default ProductList;