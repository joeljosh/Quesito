import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

import './quiz.css'
import { DetailsContext } from '../../contexts/context'


const AnsTextField = styled(TextField)({
    input: {
        color: '#fff'
    },
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& label': {
        color: '#fff',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fff',
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});


export const Quiz = () => {
    let navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answervalue, setAnswervalue] = useState('');
    const { qnans, updateAns } = useContext(DetailsContext);
    const handleTextChange = (event) => {
        setAnswervalue(event.target.value);
    };

    const handleAnswerOptionClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (answervalue === '') {
            updateAns('Not Attempted');
        }
        else {
            updateAns(answervalue)
        }
        if (nextQuestion < qnans.qapair.length) {
            // console.log(answers)
            setCurrentQuestion(nextQuestion);
            setAnswervalue('')
            console.log(qnans.answers)
        } else {
            navigate("/report");
        }
    };

    let total = qnans.qapair.length

    return (
        <div className='quizdiv'>
            <div className='boxes'>
                {/* {qnans.answers.map((ans) => {
                    if(ans === 'Not Attempted'){
                        <SquareRoundedIcon className='box' sx={{ color: 'green', fontSize: 45  }} />
                    }
                    else{
                        <SquareRoundedIcon className='box' sx={{  fontSize: 45  }}/>
                    }
                })} */}
                {[...Array(qnans.qapair.length)].map((e, i)=> {
                    if(qnans.answers[i]){
                        if(qnans.answers[i] === 'Not Attempted'){
                            return(<SquareRoundedIcon className='box' sx={{ color: 'yellow', fontSize: 45  }} />)
                        }
                        else{
                            return(<SquareRoundedIcon className='box' sx={{ color: 'green', fontSize: 45  }} />)
                        }
                    }
                    else{
                        return(<SquareRoundedIcon className='box' sx={{  fontSize: 45  }}/>)
                    }
                })}
            {/* {[...Array(currentQuestion + 1)].map((e, i) => <SquareRoundedIcon className='box' sx={{ color: 'green', fontSize: 45  }} />)}
            {[...Array(total - (currentQuestion+1))].map((e, i) => <SquareRoundedIcon className='box' sx={{  fontSize: 45  }}/>)} */}
            </div>
            <div className='quiz-section'>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{qnans.qapair.length}
                    </div>
                    <div className='question-text'>{qnans.qapair[currentQuestion].question}</div>
                </div>
                <div className='answer-section'>
                    <AnsTextField id="standard-basic" label="Answer" variant="standard" value={answervalue} onChange={handleTextChange} />
                    <Button variant="contained" endIcon={<SendIcon />} color='success' onClick={() => handleAnswerOptionClick()}>Next</Button>
                </div>
            </div>
        </div>
    )

}