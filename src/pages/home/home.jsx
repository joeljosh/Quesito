import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

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
    const [loading, setLoading] = useState(false);
    const [generate, setgenerate] = useState(false);
    const { qnans, updateQnans, resetAnswers } = useContext(DetailsContext);

    function handleSubmit() {
        setLoading(true);
        updateQnans([{'answer': 'gravitation', 'question': 'What is another name for gravity?'},
        {'answer': 'Earth',
         'question': 'On what planet does gravity give weight to physical objects?'},
        {'answer': 'galaxies', 'question': 'What do the stars in the Universe form?'},
        {'answer': 'infinite range', 'question': 'What is the range of gravity?'
        }]);
        setgenerate(true)
    }
    const handleTextChange = (event) => {
        setInputvalue(event.target.value);
    };

    return (
        <div className='homeWrapper'>
            <div className="first">

            </div>
            <div className="second">
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
                                    label="Multiline"
                                    multiline
                                    fullWidth
                                    maxRows={7}
                                    value={inputvalue}
                                    onChange={handleTextChange}
                                />
                                <LoadingButton
                                    onClick={handleSubmit}
                                    endIcon={<SendIcon />}
                                    loading={loading}
                                    loadingPosition="end"
                                    variant="contained"
                                >
                                    Send
                                </LoadingButton>
                                {generate ?
                                    <Link to="/quiz">
                                        <Button variant="contained" color="success" onClick={resetAnswers}>Success</Button>
                                    </Link>
                                    : <div></div>}
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                gsgsg
            </div>
        </div>

    )
}