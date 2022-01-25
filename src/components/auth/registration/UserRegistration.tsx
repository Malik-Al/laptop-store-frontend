import React from 'react';
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {Button, Card, Grid, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import '../userAuth.scss'
import useInput from "../../../hooks/useInput";
import {useActions} from "../../../hooks/useActions";
import {fetchRegister} from "../../../store/action-creators/auth";

const UserRegistration = () => {
    let navigate = useNavigate();
    const {fetchRegister} = useActions()
    const email = useInput('')
    const password = useInput('')
    const firstname = useInput('')
    const lastname = useInput('')

    const register = () => {
        fetchRegister(
            email.value,
            password.value,
            firstname.value,
            lastname.value)
        navigate("/login")
    }

    return (
        <ButtonAppBar>
            <Card variant="outlined" className='auth'>
                <Grid container direction="column" style={{padding: 10, width: 500}}>
                    <Typography variant="h5" className='login__title'>
                        Зарегистрироваться
                    </Typography>
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите имя'}
                        type='text'
                        {...firstname}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите фамилию'}
                        type='text'
                        {...lastname}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите email'}
                        type='email'
                        {...email}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Введите пароль'}
                        type='password'
                        {...password}
                    />

                    <div className='auth__input'>
                        <Typography variant="h6" className='auth__text' onClick={() => navigate("/login")}>
                            Авторизоваться
                        </Typography>
                        <Stack spacing={2} direction="row" className='auth__btn'>
                            <Button onClick={register} variant="outlined" >Отправить</Button>
                        </Stack>
                    </div>
                </Grid>
            </Card>
        </ButtonAppBar>
    );
};

export default UserRegistration;