import React, {useState} from 'react';
import useInput from "../../../hooks/useInput";
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import {Button, Grid, Stack, TextField} from "@mui/material";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import FileUpload from "./FileUpload";
import SendIcon from "@mui/icons-material/Send";



const ProductCreate = () => {
    const [picture, setPicture] = useState<any>(null)
    const name = useInput('')
    const description = useInput('')
    const price = useInput('')

    const next = () => {
        const formData = new FormData()
        formData.append('name', name.value)
        formData.append('description', description.value)
        formData.append('price', price.value)
        formData.append('picture', picture)
        axios.post('http://localhost:5000/product', formData)
            .then(res => <Navigate to="/"/>)
            .catch(e => console.log(e))
    }


    return (
        <ButtonAppBar>
            <Link to={'/'} style={{ textDecoration: "none"}}><Button variant="outlined">Home</Button></Link>
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
                <FileUpload setFile={setPicture} accept='image/*'>
                    <Button>Загрузить изображение</Button>
                </FileUpload>
                <Stack direction="row" spacing={2}>
                    <Button onClick={next} variant="contained" endIcon={<SendIcon />}>
                        Create
                    </Button>
                </Stack>
            </Grid>

        </ButtonAppBar>
    );
};

export default ProductCreate;