import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { DetailsContext } from '../../contexts/context'
import Button from '@mui/material/Button';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './report.css'

export const Report = () => {
    let navigate = useNavigate();
    const { qnans } = useContext(DetailsContext);
    let count = 0;
    const [val,setEval] = useState('');

    [...Array(qnans.qapair.length)].map((e, i)=> {
            if(qnans.answers[i] === 'Not Attempted'){
                count=count+1;
            }
        });
const handleHome = () =>{
    navigate('/home')
}
    return (
        <div className='reportwrapper'>
            <div className='qnreport qnsummary'>
            <div className='question-count'>
                        {/* <span>Answered {count}</span>/{qnans.qapair.length} */}
                        <h3>Total number of questions: {qnans.qapair.length}</h3>
                        <h3>Attempted: {qnans.qapair.length-count}</h3>
                        <h3>Not Attempted: {count}</h3>
                    </div>
            </div>
            <div className='qnansdisplay'>
            {qnans.qapair.map((value, index) => {
                return (
                    <>
                    <div className='qnreport'>
                        <h2>{value.question}</h2>
                        <br></br>
                        <h4>Corect Answer: {value.answer}</h4>
                        <h4>Your Answer: {qnans.answers[index]}</h4>
                        </div>
                    </>
                )
            })}
            </div>
            <Button variant="contained" startIcon={<HomeRoundedIcon />} onClick={handleHome}>
  Back To Home
</Button>
            {/* <h1>{qnans.qapair[0].question}</h1>
            <p>{qnans.qapair[0].answer}</p>
            <p>{qnans.answers[0]}</p>
            <hr></hr>
            <h1>{qnans.qapair[1].question}</h1>
            <p>{qnans.qapair[1].answer}</p>
            <p>{qnans.answers[1]}</p>
            <hr></hr>
            <h1>{qnans.qapair[2].question}</h1>
            <p>{qnans.qapair[2].answer}</p>
            <p>{qnans.answers[2]}</p>
            <hr></hr> */}
        </div>
        

    )

}