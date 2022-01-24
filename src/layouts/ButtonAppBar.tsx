import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Button, Stack} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const drawerWidth = 200;

interface Props {
    window?: () => Window;
}

const ButtonAppBar: FC<Props> = ({window, children}) =>{
    let navigate = useNavigate();
    let isAuth = false

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <List>
                {['Acer', 'Asus', 'Lenova', 'Dell'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <ComputerIcon /> : <ComputerIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, color: 'black', backgroundColor: 'white'}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" onClick={() => navigate("/")} style={{cursor: "pointer"}}>
                       Laptops application
                    </Typography>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginLeft: '400px'
                        }}>
                            { isAuth &&
                                <Button  onClick={() => navigate("/create")} variant="contained" endIcon={<SendIcon />}>
                                    Create product
                                </Button>
                            }

                            <Stack
                                direction="row"
                                spacing={2}
                                style={{marginLeft:'60px'}}
                                onClick={() => navigate("/login")}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src=''
                                    sx={{ width: 36, height: 36 }}
                                />
                            </Stack>
                        </div>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true,}} sx={{display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}>
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" sx={{display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}} open>
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 2, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                    {children}
            </Box>
        </Box>
    );
}

export default ButtonAppBar