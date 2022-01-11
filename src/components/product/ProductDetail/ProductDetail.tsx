import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import './productDetail.scss'
import {Button, ImageList, ImageListItem, Typography} from "@mui/material";
import {useActions} from "../../../hooks/useActions";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchGetProduct} from "../../../store/action-creators/product";


const ProductDetail = () => {
    const {product} = useTypeSelector(state => state.product)
    let navigate = useNavigate();
    const {fetchGetProduct} = useActions()
    const {search} = useLocation();
    const idProduct = search.slice(1)


    const [productOne, setProductOne] = useState({
        id: '',
        name: '' ,
        description: '',
        price: '',
        picture: ""
    })
    const {name, price, description, picture, id} = productOne

    useEffect(() => {
        fetchGetProduct(idProduct)
    }, [])

    useEffect(() => {
        if(product){
            setProductOne({...product})
        }
    }, [product])



    return (
        <ButtonAppBar>
                <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
            <div className='productCard'>
                    <div className='productCard__img'>
                        <ImageList sx={{ width: 500, height: 500}} cols={3} rowHeight={164}>
                            <ImageListItem sx={{width: '250%'}}>
                                {id &&
                                    <img
                                        src={`${`http://localhost:5000/`+picture}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${`http://localhost:5000/`+picture}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        loading="lazy"
                                    />
                                 }
                            </ImageListItem>
                        </ImageList>
                    </div>
                    <div className="productCard__content">
                            <Typography variant="h4" sx={{ paddingBottom: 3}}>
                        {name}
                            </Typography >
                            <Typography variant="h5" sx={{ paddingBottom: 3}}>
                            Описание:
                            </Typography>
                            <Typography sx={{ paddingBottom: 3}}>
                        {description}
                            </Typography>
                            <Typography variant="h3" sx={{ paddingBottom: 5}}>
                            Цена: {price} р
                            </Typography>
                    </div>
            </div>
        </ButtonAppBar>
    );
};

export default ProductDetail;