import React from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Card, Grid, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import '../userAuth.scss'

const UserRegistration = () => {
    let navigate = useNavigate();
    return (
        <ButtonAppBar>
            <Card variant="outlined" className='login'>
                <Grid container direction="column" style={{padding: 10, width: 500}}>
                    <Typography variant="h5" className='login__title'>
                        Зарегистрироваться
                    </Typography>
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите имя'}
                        type='text'
                        name="firstname"
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите фамилию'}
                        type='text'
                        name="lastname"
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите email'}
                        type='email'
                        name="email"
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите пароль'}
                        type='password'
                        name="password"
                    />

                    <div className='login__input'>
                        <Typography variant="h6" className='login__text' onClick={() => navigate("/login")}>
                            Авторизоваться
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

export default UserRegistration;