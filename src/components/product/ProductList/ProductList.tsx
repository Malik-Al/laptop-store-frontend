import React, {useEffect} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchProduct} from "../../../store/action-creators/product";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useActions} from "../../../hooks/useActions";
import {Box, CircularProgress} from "@mui/material";


const ProductList = () => {
    const {products, loading, error} = useTypeSelector(state => state.product)
    const {fetchProduct} = useActions()

    useEffect(() => {
        fetchProduct()
    }, [])


    if(loading){
        return (
             <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '400px'}}>
                <CircularProgress/>
             </Box>
        )
    }


    if(error){
        return <div style={{display: 'flex', fontSize: '30px',justifyContent: 'center', marginTop: '400px'}}>
            {error} Произошла ошибка
        </div>
    }


    return (
            <ButtonAppBar>
                <div style={{display: 'flex',flexWrap: "wrap"}}>
                    {products.map((product, id) =>
                        <ProductItem key={id} product={product}/>,
                        )}
                </div>
            </ButtonAppBar>
    );
};

export default ProductList;
