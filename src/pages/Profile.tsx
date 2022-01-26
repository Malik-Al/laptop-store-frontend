import React, {FC, useEffect, useState} from 'react';
import ButtonAppBar from "../layouts/ButtonAppBar";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Card, CardContent, Typography} from "@mui/material";
import {useActions} from "../hooks/useActions";



const Profile = () => {
    const {user} = useTypeSelector(state => state.user)
    const {fetchLoginUser} = useActions()
    const [users, setUsers] = useState({
        email: '' ,
        lastname: '',
        firstname: '',
    })
    const {email, lastname, firstname} = users

    useEffect(() => {
        fetchLoginUser()
    },[])

    useEffect(() => {
        if(user){
            setUsers({...user})
        }
    }, [user])

    return (
        <ButtonAppBar>
            <div style={{display: 'flex', justifyContent: 'center',  flexDirection: 'column', alignItems: 'center'}}>
                <Card sx={{ width: 500, height: 300 }}>
                    <Typography variant="h4" component="div" sx={{display: 'flex', justifyContent: 'center',}}>
                        Profile
                    </Typography>
                    <CardContent >
                            <Typography variant="h5" component="div">
                                Email: {email}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Фамилия: {lastname}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Имя: {firstname}
                            </Typography>
                        </CardContent>
                </Card>
            </div>
        </ButtonAppBar>
    );
};

export default Profile;