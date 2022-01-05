import React, {useEffect} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchProduct} from "../../../store/action-creators/product";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useActions} from "../../../hooks/useActions";


const ProductList = () => {
    const {products, loading, error} = useTypeSelector(state => state.product)
    const {fetchProduct} = useActions()

    useEffect(() => {
        fetchProduct()
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
                        <ProductItem key={id} product={product}/>,
                        )}
                </div>
            </ButtonAppBar>
        </>

    );
};

export default ProductList;