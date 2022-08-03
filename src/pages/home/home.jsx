import React, { useState, useContext, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from "../../contexts/authContexts"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import './home.css'
import { DetailsContext } from '../../contexts/context'

const OurTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#A0D995',
        },
        '&:hover fieldset': {
            borderColor: 'red',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#064635',
        },
    },
}));


export const Home = () => {
    const [inputvalue, setInputvalue] = useState('');
    const [send, setSend] = useState(true)
    const [loading, setLoading] = useState(false);
    const [generate, setgenerate] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { logout } = useAuth();
    const { qnans, updateQnans, resetAnswers } = useContext(DetailsContext);

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    const handleSubmit = () => {
        setLoading(true);

        axios.post('http://127.0.0.1:5000/connect', inputvalue)
            .then(function (response) {
                console.log(response.data);
                updateQnans(response.data.data)
                console.log(qnans.qapair);
                setSend(false);
                setgenerate(true);
            })
            .catch(function (error) {
                console.log(error);
            });

        // updateQnans([{'answer': 'gravitation', 'question': 'What is another name for gravity?'},
        // {'answer': 'Earth',
        //  'question': 'On what planet does gravity give weight to physical objects?'},
        // {'answer': 'galaxies', 'question': 'What do the stars in the Universe form?'},
        // {'answer': 'infinite range', 'question': 'What is the range of gravity?'
        // },
        // {'answer': 'gravitation', 'question': 'What is another name for gravity?'},
        // {'answer': 'Earth',
        //  'question': 'On what planet does gravity give weight to physical objects?'},
        // {'answer': 'galaxies', 'question': 'What do the stars in the Universe form?'},
        // {'answer': 'infinite range', 'question': 'What is the range of gravity?'
        // }])    
        // console.log(qnans);
        // setgenerate(true);    
    }

    const handleTextChange = (event) => {
        setInputvalue(event.target.value);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
    }

    return (
        <div className='homeWrapper'>
            <div className='logout'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle sx={{ fontSize: "3vw" }} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
            <div className="first">
                <div className='left'>
                    <p className='headtext'><span className='greenhead'><strong>Lets start learning</strong></span><br></br>
                        <span className='whitehead'>Self evaluation is now just a click away</span>
                    </p>
                    <Button sx={{ color: '#a9e34b' }} size='large' onClick={executeScroll} endIcon={<ArrowForwardIosIcon />}>
                        Get Started
                    </Button>
                    <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
                </div>
                <div className='right'>
                </div>
            </div>
            <div className="second" ref={myRef}>
                <Paper elevation={15} sx={{ width: '75%', margin: 'auto', minHeight: '60vh' }}>
                    <div className="submit">
                        <Grid container >
                            <Grid item xs={4} >
                                <img src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvbWV0cmljJTIwcGF0dGVybnxlbnwwfHwwfHw%3D&w=1000&q=80" className="homeimg"></img>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                xs={7}
                                sx={{ marginTop: '3vh', marginLeft: 3 }}
                            >
                                <OurTextField
                                    id="outlined-multiline-flexible"
                                    className="field"
                                    label="Enter Text"
                                    multiline
                                    fullWidth
                                    maxRows={7}
                                    value={inputvalue}
                                    onChange={handleTextChange}
                                />
                                {send ?
                                    <LoadingButton
                                        onClick={handleSubmit}
                                        endIcon={<SendIcon />}
                                        loading={loading}
                                        loadingPosition="end"
                                        variant="contained"
                                        sx={{ marginTop: '3vh' }}
                                    >
                                        Send
                                    </LoadingButton>
                                    : <div></div>
                                }
                                {generate ?
                                    <Link to="/quiz">
                                        <Button variant="contained" color="success" onClick={resetAnswers} sx={{ marginTop: '3vh' }}>Attempt Quiz</Button>
                                    </Link>
                                    : <div></div>}
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        </div>

    )
}