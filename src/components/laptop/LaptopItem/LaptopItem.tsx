import React, {FC} from 'react';
import {Button, Grid, ImageList, ImageListItem, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import './laptopItem.scss'
import {useNavigate} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
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
        <>
            <Grid className='card'>
                <ImageList onClick={() => handleGetIdLaptopClick('detail')} sx={{ width: 300, height: 300, padding: '10px'}} cols={3} rowHeight={164}>
                    <ImageListItem sx={{width: '300%'}}>
                        {laptop.id &&
                            <img
                                src={`${`${SERVER_URL}/`+laptop.picture}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${`${SERVER_URL}/`+laptop.picture}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                            />
                        }
                    </ImageListItem>
                </ImageList>
                <div className='card__title'>
                    <h4>{laptop.price} p</h4>
                    <div>{laptop.name}</div>
                </div>
                <Stack direction="row" spacing={2}>
                    <Button onClick={LaptopDelete} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button onClick={() => handleGetIdLaptopClick('update')} variant="outlined" startIcon={<SystemUpdateAltIcon />}>
                        Update
                    </Button>
                </Stack>
            </Grid>
        </>

    );
};


export default LaptopItem;