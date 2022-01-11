import React, {useEffect, useState} from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Grid, Stack, TextField} from "@mui/material";
import FileUpload from "../productCreate/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useActions} from "../../../hooks/useActions";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

const ProductUpdate = () => {
    const {products} = useTypeSelector<any>(state => state.product)
    let navigate = useNavigate();
    const [productOne, setProductOne] = useState<any>('')
    const {fetchUpdateProduct} = useActions()
    const {search} = useLocation();
    const id = search.slice(1)

    const OneRequest = () => {
        axios.get(`http://localhost:5000/product/${id}`).then(res => setProductOne(res.data))
    }

    useEffect(() => {
        OneRequest()
    }, [])


    // const [picture, setPicture] = useState<any>(null)

    // const name = useInput('')
    // const description = useInput('')
    // const price = useInput('')



    // const [name, setName] = useState(productOne.name);
    // const [description, setDescription] = useState(productOne.description);
    // const [price, setPrice] = useState(productOne.price);

/////////////////////////////////////////
    const [state, setState] = useState({
        name: '' ,
        description: '',
        price: '',
        picture: ''
    })
    const {name, price, description, picture} = state

    useEffect(() => {
        if(productOne){
            setState({...productOne})
        }
    }, [productOne])


    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = event.target
        setState({...state, [name]: value})
    };

///////////////////////////////////////////

    // let pict = picture ? picture.name: productOne.picture
    // console.log('picture.name:',pict)

    const updateProductRequest = async () => {
        await fetchUpdateProduct(
            id,
            state
        )
        navigate("/")
    }

////////////////////////////////////////////////


    // const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.target.value)
    //     // console.log(name)
    // };
    //
    // const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPrice(event.target.value);
    //     // console.log(price)
    //
    // };
    //
    // const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDescription(event.target.value);
    //     // console.log(description)
    //
    // };



    return (
        <ButtonAppBar>
            <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
                <Grid container direction="column" style={{padding: 10}}>
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
                    {picture ?
                        <div style={{fontSize: '20px'}}>
                            Название файла:
                            <h5 style={{
                                margin: '0',
                                paddingBottom: '10px',
                                color: '#0077ff',
                                fontSize: '25px'
                            }}>{picture}</h5>
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

                    {/*<FileUpload setFile={setPicture}  accept='image/*'>*/}
                    {/*    <Button*/}
                    {/*        variant="outlined"*/}
                    {/*        style={{*/}
                    {/*            marginTop: '10px',*/}
                    {/*            marginBottom: '10px'*/}
                    {/*        }}*/}
                    {/*    >Изменить изображение</Button>*/}
                    {/*</FileUpload>*/}

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

export default ProductUpdate;