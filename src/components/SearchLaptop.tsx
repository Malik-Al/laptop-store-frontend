import React, {useEffect, useState} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LaptopItem from "../pages/laptop/LaptopItem/LaptopItem";
import {Container} from "@mui/material";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const SearchLaptop = () => {
    const {laptop} = useTypeSelector(state => state.laptop)
    const {fetchLaptopSearch} = useActions()
    const [query, setQuery] = useState<string>('')
    const [timer, setTimer] = useState<any>(null)


    const [laptopOne, setLaptopOne] = useState({
        id: '',
        name: '' ,
        price: '',
        picture: ''
    })
    const {name, price, id, picture} = laptopOne


    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer){
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async function () {
                await fetchLaptopSearch(e.target.value)
            }, 500)
        )
    }

    useEffect(() => {
        if(laptop){
            setLaptopOne({...laptop})
        }
    }, [laptop])



    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={query}
                    onChange={search}
                />
            </Search>
            {laptop &&
                <Container maxWidth="md">
                    <Grid container spacing={4} >
                        <Grid item key={id} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <LaptopItem key={id} laptop={laptop}/>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            }
            {/*{laptop &&*/}
            {/*    <Grid item key={id} xs={12} sm={6} md={4}>*/}
            {/*        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
            {/*            <CardMedia*/}
            {/*                component="img"*/}
            {/*                image={`${SERVER_URL}/`+picture}*/}
            {/*            />*/}
            {/*            <CardContent sx={{ flexGrow: 1}} style={{padding: '16px'}}>*/}
            {/*                <Typography gutterBottom variant="h5" component="h2">*/}
            {/*                    {name}*/}
            {/*                </Typography>*/}
            {/*                <Typography>*/}
            {/*                    {price}*/}
            {/*                </Typography>*/}
            {/*            </CardContent >*/}
            {/*        </Card>*/}
            {/*    </Grid>*/}
            {/*}*/}
        </>
    );
};

export default SearchLaptop;