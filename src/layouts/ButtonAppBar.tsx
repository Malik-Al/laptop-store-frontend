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
import {useNavigate} from "react-router-dom";
import {Avatar, Button, Stack} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";
import SearchLaptop from "../components/SearchLaptop";


const drawerWidth = 200;
interface Props {
    window?: () => Window;
}


const ButtonAppBar: FC<Props> = ({window, children}) =>{
    const {isAuth} = useTypeSelector(state => state.user)
    const {fetchLoginUser} = useActions()
    let navigate = useNavigate();
    let isAuthAdmin = false


    function clearLogin(){
        localStorage.clear()
        fetchLoginUser()
    }



    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Typography
                sx={{fontSize: 20, padding: 1, marginBottom: 2}}
                variant="h6"
                noWrap
                component="div"
                onClick={() => navigate("/")}
                style={{cursor: "pointer"}}
            >
                Laptops application
            </Typography>
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
            <AppBar  position="fixed" sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, color: 'black', backgroundColor: 'white'}}>
                <Toolbar style={{minHeight: 0}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                       {/*<SearchLaptop/>*/}
                        <div style={{display: "flex", margin: 'auto'}}></div>
                            { isAuthAdmin &&
                                <Button
                                    onClick={() => navigate("/create")}
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    style={{fontSize: 10}}
                                >
                                    Create product
                                </Button>
                            }
                            {!isAuth
                                ? <Button onClick={() => navigate("/login")} >Login</Button>
                                : <Button onClick={clearLogin} >Exit</Button>
                            }
                    <Stack
                        direction="row"
                        spacing={2}
                        style={{marginLeft:'60px'}}
                        onClick={() => localStorage.getItem('user') ? navigate("/profile"):navigate("/login") }
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src=''
                            sx={{ width: 33, height: 33 }}
                        />
                    </Stack>
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