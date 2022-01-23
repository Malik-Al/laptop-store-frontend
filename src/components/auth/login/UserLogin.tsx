import React from 'react';
import {Button, Card, Grid, Stack, TextField, Typography} from "@mui/material";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useNavigate} from "react-router-dom";
import '../userAuth.scss'

const UserLogin = () => {
    let navigate = useNavigate();

    return (
        <ButtonAppBar>
            <Card variant="outlined" className='login'>
                    <Grid container direction="column" style={{padding: 10, width: 500}}>
                        <Typography variant="h5" className='login__title'>
                            Авторизоваться
                        </Typography>
                        <TextField
                            label={'Введите email'}
                            type='email'
                            name="email"
                            style={{marginTop: 10}}
                        />
                        <TextField
                            label={'Введите пароль'}
                            type='password'
                            name="password"
                            style={{marginTop: 10}}
                        />
                        <div className='login__input'>
                            <Typography variant="h6" className='login__text' onClick={() => navigate("/registration")}>
                                Зарегистрироваться
                            </Typography>
                            <Stack spacing={2} direction="row" className='login__btn'>
                                <Button variant="outlined" >Отправить</Button>
                            </Stack>
                        </div>
                    </Grid>
                </Card>
        </ButtonAppBar>
    );
};

export default UserLogin;