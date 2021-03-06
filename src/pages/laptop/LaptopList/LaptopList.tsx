import React, {useEffect, useState} from 'react';
import ProductItem from "../LaptopItem/LaptopItem";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchLaptop} from "../../../store/action-creators/laptop";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useActions} from "../../../hooks/useActions";
import {Box, CircularProgress} from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import LaptopItem from "../LaptopItem/LaptopItem";



const LaptopList = () => {
    const {laptops, laptop,  loading, error} = useTypeSelector(state => state.laptop)
    const {fetchLaptop} = useActions()
    const [laptopOne, setLaptopOne] = useState({id: ''})
    const {id} = laptopOne


    useEffect(() => {
        if(laptop){
            setLaptopOne({...laptop})
        }
    }, [laptop])


    useEffect(() => {
        fetchLaptop()
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
        <>
            <ButtonAppBar>
                    <Container maxWidth="md">
                        <Grid container spacing={4} >
                            {laptop
                                ?
                                <Grid item key={id} xs={12} sm={6} md={4}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <LaptopItem key={id} laptop={laptop}/>
                                    </Card>
                                </Grid>
                                :
                                laptops.map((laptop, id) =>
                                    <Grid item key={id} xs={12} sm={6} md={4}>
                                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <ProductItem key={id} laptop={laptop}/>,
                                        </Card>
                                    </Grid>
                                    )
                            }
                        </Grid>
                    </Container>
            </ButtonAppBar>
        </>

    );
};

export default LaptopList;