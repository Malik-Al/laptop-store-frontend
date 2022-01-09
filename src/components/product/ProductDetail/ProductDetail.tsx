import React, {FC,useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import './productDetail.scss'
import {Button, ImageList, ImageListItem, Typography} from "@mui/material";
import {useActions} from "../../../hooks/useActions";

type ProductType = {
    id?: string,
    name?: string;
    description?: string;
    picture?: string;
    price?: number
}


interface ProductsProps{
    products?: ProductType
}



const ProductDetail = () => {
    let navigate = useNavigate();
    const {fetchGetProduct} = useActions()
    const [productOne, setProductOne] = useState<any>('')
    const {search} = useLocation();
    const id = search.slice(1)

    const OneRequest = () => {
        axios.get(`http://localhost:5000/product/${id}`).then(res => setProductOne(res.data))
        // setProductOne(fetchGetProduct(id))
    }

    useEffect(() => {
        OneRequest()
    }, [])



    return (
        <ButtonAppBar>
                <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
            <div className='productCard'>
                    <div className='productCard__img'>
                        <ImageList sx={{ width: 500, height: 500}} cols={3} rowHeight={164}>
                            <ImageListItem sx={{width: '250%'}}>
                                {productOne.id &&
                                    <img
                                        src={`${`http://localhost:5000/`+productOne.picture}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${`http://localhost:5000/`+productOne.picture}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        loading="lazy"
                                    />
                                }
                            </ImageListItem>
                        </ImageList>
                    </div>
                    <div className="productCard__content">
                    <Typography variant="h4" sx={{ paddingBottom: 3}}>
                {productOne.name}
                    </Typography >
                    <Typography variant="h5" sx={{ paddingBottom: 3}}>
                    Описание:
                    </Typography>
                    <Typography sx={{ paddingBottom: 3}}>
                {productOne.description}
                    </Typography>
                    <Typography variant="h3" sx={{ paddingBottom: 5}}>
                    Цена: {productOne.price} р
                    </Typography>
                    </div>
            </div>
        </ButtonAppBar>
    );
};

export default ProductDetail;