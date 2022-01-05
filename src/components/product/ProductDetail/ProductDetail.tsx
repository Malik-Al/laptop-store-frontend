import React, {FC,useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";

type ProductType = {
    id: string,
    name: string;
    description: string;
    picture: string;
    price: number
}


interface ProductsProps{
    products?: ProductType
}


const ProductDetail:FC<ProductsProps> = ({products}) => {
    const [productOne, setProductOne] = useState<any>('')
    const {search} = useLocation();
    const id = search.slice(1)

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`).then(res => setProductOne(res.data))
    }, [])



    return (
        <div>
            <h3>{productOne.name}</h3>
            <p>{productOne.description}</p>
            <div>{productOne.price}</div>
            {productOne.id &&
                <img width={200} height={170} src={`http://localhost:5000/`+productOne.picture}/>
            }
        </div>
    );
};

export default ProductDetail;