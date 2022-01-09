import React, {useState} from 'react';
import useInput from "../../../hooks/useInput";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import {Button, Grid, Stack, TextField} from "@mui/material";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import FileUpload from "./FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useActions} from "../../../hooks/useActions";



const ProductCreate = () => {
    const {fetchCreateProduct} = useActions()
    let navigate = useNavigate();
    const [picture, setPicture] = useState<any>(null)
    const name = useInput('')
    const description = useInput('')
    const price = useInput('')




    const next = async () => {
        await fetchCreateProduct(
            name.value,
            description.value,
            price.value,
            picture
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
                    label={'name'}
                />
                <TextField
                    {...price}
                    style={{marginTop: 10}}
                    label={'price'}
                />
                <TextField
                    {...description}
                    style={{marginTop: 10}}
                    label={'description'}
                    multiline
                    rows={3}
                />
                <FileUpload setFile={setPicture}  accept='image/*'>
                    <Button>Загрузить изображение</Button>
                </FileUpload>
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
                    : null
                }
                <Stack direction="row" spacing={2}>
                    <Button onClick={next} variant="contained" endIcon={<SendIcon />}>
                        Save
                    </Button>
                </Stack>
            </Grid>
        </ButtonAppBar>
    );
};

export default ProductCreate;