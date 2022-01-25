import React, {useEffect} from 'react';
import ButtonAppBar from "../layouts/ButtonAppBar";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Card, CardContent, Typography} from "@mui/material";

const Profile = () => {
    const {user} = useTypeSelector(state => state.user)

    return (
        <ButtonAppBar>
            <div style={{display: 'flex', justifyContent: 'center',  flexDirection: 'column', alignItems: 'center'}}>
                <Card sx={{ width: 500, height: 300 }}>
                    <Typography variant="h4" component="div" sx={{display: 'flex', justifyContent: 'center',}}>
                        Profile
                    </Typography>
                    {user.map((use, id) =>
                        <CardContent key={id}>
                            <Typography variant="h5" component="div">
                                Email: {use.email}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Фамилия: {use.lastname}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Имя: {use.firstname}
                            </Typography>
                        </CardContent>
                    )}
                </Card>
            </div>
        </ButtonAppBar>
    );
};

export default Profile;