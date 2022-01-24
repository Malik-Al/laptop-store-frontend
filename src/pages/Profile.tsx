import React from 'react';
import jwt_decode from "jwt-decode";
import ButtonAppBar from "../layouts/ButtonAppBar";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Card, CardContent, Typography} from "@mui/material";

const Profile = () => {
    const {isAuth, user} = useTypeSelector(state => state.user)
    // const local: any = localStorage.getItem('user')
    // const tokenName = JSON.parse(local)
    // const users = jwt_decode(tokenName.token)
    console.log('localStorage.getItem()', isAuth)
    console.log('localStorage.user()', user)

    return (
        <ButtonAppBar>
            <Card sx={{ width: 500, height: 300 }}>
                {/*<CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>*/}
                {/*    <Typography variant="h5" component="div">*/}
                {/*        email*/}
                {/*    </Typography>*/}
                {/*    <Typography variant="h5" component="div">*/}
                {/*        lastname*/}
                {/*    </Typography>*/}
                {/*    <Typography variant="h5" component="div">*/}
                {/*        firstname*/}
                {/*    </Typography>*/}
                {/*</CardContent>*/}
                {user && user.map((use, id) =>
                    <CardContent key={id}>
                        <Typography variant="h5" component="div">
                            {use.email}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {use.lastname}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {use.firstname}
                        </Typography>
                    </CardContent>
                )}
            </Card>
        </ButtonAppBar>
    );
};

export default Profile;