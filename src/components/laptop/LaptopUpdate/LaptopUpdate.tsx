import React, {useEffect, useState} from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Grid, Stack, TextField} from "@mui/material";
import FileUpload from "../LaptopCreate/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useLocation, useNavigate} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {fetchGetLaptop, fetchUpdateLaptop} from "../../../store/action-creators/laptop";

const LaptopUpdate = () => {
    const [pictureOne, setPicture] = useState<any>(null)
    const {laptop} = useTypeSelector(state => state.laptop)
    let navigate = useNavigate();
    const {fetchUpdateLaptop, fetchGetLaptop} = useActions()
    const {search} = useLocation();
    const laptopId = search.slice(1)




    const [state, setState] = useState({
        id: '',
        name: '' ,
        description: '',
        price: '',
        picture: ''
    })

    const {id, name, description, price, picture} = state

    const updateProductRequest = async () => {
        await fetchUpdateLaptop(
            laptopId,
            name,
            description,
            price,
            picture
        )
        navigate("/")
    }

    useEffect(() => {
        fetchGetLaptop(laptopId)
    }, [])


    useEffect(() => {
        if(laptop){
            setState({...laptop})
        }
    }, [laptop])


    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = event.target
        setState({...state, [name]: value})
    };


///////////////////////////////////////////

    // let pict = picture ? picture.name: productOne.picture
    // console.log('picture.name:',pict)


    return (
        <ButtonAppBar>
            <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
                <Grid container direction="column" style={{padding: 10, width: 600}}>
                    <TextField
                        style={{marginTop: 10}}
                        value={name || ''}
                        type='text'
                        name="name"
                        onChange={handleClick}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        value={price || ''}
                        type='number'
                        name="price"
                        onChange={handleClick}

                    />
                    <TextField
                        style={{marginTop: 10}}
                        value={description || ''}
                        type='text'
                        name="description"
                        onChange={handleClick}
                        multiline
                        rows={3}
                    />
                    {pictureOne ?
                        <div style={{fontSize: '20px'}}>
                            Название файла:
                            <h5 style={{
                                margin: '0',
                                paddingBottom: '10px',
                                color: '#0077ff',
                                fontSize: '25px'
                            }}>{pictureOne}</h5>
                        </div>
                        :
                        id &&
                            <div style={{width: 300, height: 300, marginTop: '10px'}}>
                                <img
                                    style={{width: 250}}
                                    src={`${`http://localhost:5002/` + picture}?w=164&h=164&fit=crop&auto=format`}
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
                            onClick={updateProductRequest}
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

export default LaptopUpdate;