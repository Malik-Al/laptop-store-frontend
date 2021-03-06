import React, {useState} from 'react';
import useInput from "../../../hooks/useInput";
import {useNavigate } from "react-router-dom";
import {Button, Grid, Stack, TextField} from "@mui/material";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import FileUpload from "../../../components/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useActions} from "../../../hooks/useActions";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';



const LaptopCreate = () => {
    const {fetchCreateLaptop} = useActions()
    let navigate = useNavigate();
    const [picture, setPicture] = useState<any>(null)
    const name = useInput('')
    const description = useInput('')
    const price = useInput('')
    const [error, setError] = useState('')


    const createProductRequest = async () => {
        if(!name || !description || !price || !picture) {
            return (
                setError('Пожалуйста заполните все поля')
            )
        }
        await fetchCreateLaptop(
            name.value,
            description.value,
            price.value,
            picture
        )
        navigate("/")
    }


    return (
        <ButtonAppBar>
            {error &&
                <Stack sx={{ width: '100%', marginBottom: '40px' }} spacing={2}>
                    <div onClick={() => setError('')}
                         style={{display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}
                    >
                        <CloseIcon/>
                    </div>
                    <Alert severity="error">{error}</Alert>
                </Stack>
            }
                <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
            <Grid container direction="column" style={{padding: 10, width: 600}}>
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
                    <Button
                        variant="outlined"
                        style={{
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                    >Загрузить изображение</Button>
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
                    <Button onClick={createProductRequest} variant="contained" endIcon={<SendIcon />}>
                        Save
                    </Button>
                </Stack>
            </Grid>
        </ButtonAppBar>
    );
};

export default LaptopCreate;