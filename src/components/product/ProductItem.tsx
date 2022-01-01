import React, {FC} from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        <div>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={'http://localhost:5000/' + product.picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>

                </CardContent>
            </Card>
        </div>
    );
};

export default ProductItem;