import React, {FC} from 'react';
import {Card, Grid, ListItem} from "@mui/material";
import './productItem.scss'


type ProductType = {
    name: string;
    description: string;
    picture: string;
    price: number
}


interface ProductsProps{
    product: ProductType
}


const ProductItem: FC<ProductsProps> = ({product}) => {

    return (
            <Grid>
                <Grid item md={3}>
                    <ListItem className='card'>
                        <img width={200} height={170} src={`http://localhost:5000/` + product.picture}/>
                    </ListItem>
                </Grid>
                <div className='card__title'>
                    <h4>{product.price}</h4>
                    <div>{product.name}</div>
                </div>
            </Grid>

    );
};

export default ProductItem;