import React from 'react';
import {Button, Card, Grid, Stack, TextField, Typography} from "@mui/material";
import ButtonAppBar from "../../../layouts/ButtonAppBar";
import {useNavigate} from "react-router-dom";
import '../userAuth.scss'
import useInput from "../../../hooks/useInput";
import {useActions} from "../../../hooks/useActions";
import {useTypeSelector} from "../../../hooks/useTypeSelector";


const UserLogin = () => {
    const {user, isAuth} = useTypeSelector(state => state.user)
    console.log('user', user)
    console.log('isAuth', isAuth)



    let navigate = useNavigate();
    const {fetchLoginUser} = useActions()
    const email = useInput('')
    const password = useInput('')

    const login = async () => {
       await fetchLoginUser(email.value, password.value)
    }

    return (
        <ButtonAppBar>
            <Card variant="outlined" className='auth'>
                    <Grid container direction="column" style={{padding: 10, width: 500}}>
                        <Typography variant="h5" className='login__title'>
                            Авторизоваться
                        </Typography>
                        <TextField
                            label={'Введите email'}
                            type='email'
                            style={{marginTop: 10}}
                            {...email}
                        />
                        <TextField
                            label={'Введите пароль'}
                            type='password'
                            style={{marginTop: 10}}
                            {...password}
                        />
                        <div className='auth__input'>
                            <Typography variant="h6" className='auth__text' onClick={() => navigate("/registration")}>
                                Зарегистрироваться
                            </Typography>
                            <Stack  spacing={2} direction="row" className='auth__btn'>
                                <Button onClick={login} variant="outlined" >Отправить</Button>
                            </Stack>
                        </div>
                    </Grid>
                </Card>
        </ButtonAppBar>
    );
};

export default UserLogin;