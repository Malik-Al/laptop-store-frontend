import React, {useEffect, useState} from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Box, Button, Grid, Stack, TextField} from "@mui/material";
import FileUpload from "../productCreate/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const ProductUpdate = () => {
    let navigate = useNavigate();

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
                <Grid container direction="column" style={{padding: 10}}>
                    <TextField
                        style={{marginTop: 10}}
                        // label={'name'}
                        value={productOne.name || ''}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        value={productOne.price || ''}
                        // label={'price'}

                    />
                    <TextField
                        style={{marginTop: 10}}
                        value={productOne.description || ''}
                        // label={'description'}
                        multiline
                        rows={3}
                    />

                    <Stack direction="row" spacing={2}>
                        <Button  variant="contained" endIcon={<SendIcon />}>
                            Save
                        </Button>
                    </Stack>
                </Grid>
        </ButtonAppBar>
    );
};

export default ProductUpdate;