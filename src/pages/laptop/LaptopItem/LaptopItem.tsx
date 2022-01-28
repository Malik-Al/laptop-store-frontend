import React, {FC} from 'react';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import {useNavigate} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


type LaptopType = {
    id: string,
    name: string;
    picture: string;
    price: number
}


interface LaptopsProps{
    laptop: LaptopType
}


const LaptopItem: FC<LaptopsProps> = ({laptop}) => {
    let navigate = useNavigate()
    let isAuth = false
    const {fetchDeleteLaptop} = useActions()

    function handleGetIdLaptopClick(url: string){
        navigate({
            pathname: url,
            search: laptop.id
        })
    }

    async function LaptopDelete() {
        await fetchDeleteLaptop(laptop.id)
    }


    return (
        <div>
            <CardMedia
                onClick={() => handleGetIdLaptopClick('detail')}
                component="img"
                image={`${SERVER_URL}/`+laptop.picture}
            />
            <CardContent sx={{ flexGrow: 1}} style={{padding: '16px'}}>
                <Typography gutterBottom variant="h5" component="h2">
                    {laptop.name}
                </Typography>
                <Typography>
                    {laptop.price}
                </Typography>
            </CardContent >

            {isAuth &&
                <CardActions>
                    <Button
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={LaptopDelete}
                    >Delete</Button>
                    <Button
                        size="small"
                        startIcon={<SystemUpdateAltIcon />}
                        onClick={() => handleGetIdLaptopClick('update')}
                    >Edit</Button>
                </CardActions>
            }

        </div>
    );
};


export default LaptopItem;