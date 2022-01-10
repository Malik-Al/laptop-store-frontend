import React, {useEffect, useState} from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Grid, Stack, TextField} from "@mui/material";
import FileUpload from "../productCreate/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useActions} from "../../../hooks/useActions";
import useInput from "../../../hooks/useInput";

const ProductUpdate = () => {
    const {fetchUpdateProduct} = useActions()
    const [picture, setPicture] = useState<any>(null)
    const name = useInput('')
    const description = useInput('')
    const price = useInput('')

    let navigate = useNavigate();

    const [productOne, setProductOne] = useState<any>('')
    const {search} = useLocation();
    const id = search.slice(1)

    const OneRequest = () => {
        axios.get(`http://localhost:5000/product/${id}`).then(res => setProductOne(res.data))
    }

    useEffect(() => {
        OneRequest()
    }, [])


    const updateProductRequest = async () => {
        await fetchUpdateProduct(
            name.value,
            description.value,
            price.value,
            picture,
            id
        )
        navigate("/")
    }


    return (
        <ButtonAppBar>
            <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
                <Grid container direction="column" style={{padding: 10}}>
                    <TextField
                        {...name}
                        style={{marginTop: 10}}
                        // value={productOne.name || ''}
                    />
                    {productOne.name}
                    <TextField
                        {...price}
                        style={{marginTop: 10}}
                        // value={productOne.price || ''}
                    />
                    {productOne.price}
                    <TextField
                        {...description}
                        style={{marginTop: 10}}
                        // value={productOne.description || ''}
                        multiline
                        rows={3}
                    />
                    {productOne.description}

                    {picture ?
                        <div style={{fontSize: '20px'}}>
                            Название файла:
                            <h5 style={{
                                margin: '0',
                                paddingBottom: '10px',
                                color: '#0077ff',
                                fontSize: '25px'
                            }}>{picture.name}</h5>
                        </div>
                        :
                        productOne.id &&
                        <div style={{width: 300,height: 300, marginTop: '10px'}}>
                            <img
                                style={{width: 250}}
                                src={`${`http://localhost:5000/`+productOne.picture}?w=164&h=164&fit=crop&auto=format`}
                            />
                        </div>
                    }

                    <FileUpload setFile={setPicture}  accept='image/*'>
                        <Button
                            variant="outlined"
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}
                        >Изменить изображение</Button>
                    </FileUpload>

                    <Stack direction="row" spacing={2}>
                        <Button
                            // onClick={updateProductRequest}
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Save
                        </Button>
                    </Stack>
                </Grid>
        </ButtonAppBar>
    );
};

export default ProductUpdate;