import React from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Grid, Stack, TextField} from "@mui/material";
import FileUpload from "../productCreate/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import {useNavigate} from "react-router-dom";

const ProductUpdate = () => {
    let navigate = useNavigate();
    return (
        <ButtonAppBar>
            <Button onClick={() => navigate("/")} variant="outlined">Home</Button>
            <Grid container direction="column" style={{padding: 10}}>
                <TextField
                    style={{marginTop: 10}}
                    label={'name'}
                />
                <TextField
                    style={{marginTop: 10}}
                    label={'price'}
                />
                <TextField
                    style={{marginTop: 10}}
                    label={'description'}
                    multiline
                    rows={3}
                />
                {/*<FileUpload*/}
                {/*    accept='image/*' */}
                {/*    setFile={''}*/}
                {/*>*/}
                {/*    <Button*/}
                {/*        variant="outlined"*/}
                {/*        style={{*/}
                {/*            marginTop: '10px',*/}
                {/*            marginBottom: '10px'*/}
                {/*        }}*/}
                {/*    >Загрузить изображение</Button>*/}
                {/*</FileUpload>*/}
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