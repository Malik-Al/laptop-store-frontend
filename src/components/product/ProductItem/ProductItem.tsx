import React, {FC} from 'react';
import {Grid, ListItem} from "@mui/material";
import './productItem.scss'
import {useNavigate} from "react-router-dom";


type ProductType = {
    id: string,
    name: string;
    description: string;
    picture: string;
    price: number
}


interface ProductsProps{
    product: ProductType
}


const ProductItem: FC<ProductsProps> = ({product}) => {
    let navigate = useNavigate()

    function handleClick() {
        navigate({
            pathname: 'detail',
            search: product.id
        })
    };


    return (
        <Grid onClick={handleClick}>
            <Grid >
                <ListItem className='card'>
                    <img width={200} height={155} src={`http://localhost:5000/` + product.picture}/>
                </ListItem>
            </Grid>
            <div className='card__title'>
                <h4>{product.price} p</h4>
                <div>{product.name}</div>
            </div>
        </Grid>


    );
};

export default ProductItem;