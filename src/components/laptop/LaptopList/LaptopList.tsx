import React, {useEffect} from 'react';
import ProductItem from "../LaptopItem/LaptopItem";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchLaptop} from "../../../store/action-creators/laptop";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useActions} from "../../../hooks/useActions";
import {Box, CircularProgress} from "@mui/material";


const LaptopList = () => {
    const {laptops, loading, error} = useTypeSelector(state => state.laptop)
    const {fetchLaptop} = useActions()

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
                <div style={{display: 'flex',flexWrap: "wrap"}}>
                    {laptops.map((laptop, id) =>
                        <ProductItem key={id} laptop={laptop}/>,
                        )}
                </div>
            </ButtonAppBar>
        </>

    );
};

export default LaptopList;