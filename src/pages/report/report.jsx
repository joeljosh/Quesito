import React, { useState, useContext } from 'react';
import { DetailsContext } from '../../contexts/context'

export const Report = () => {
    const { qnans} = useContext(DetailsContext);
    console.log(qnans.answers)
    return(
        <div>
            <h1>{qnans.qapair[0].question}</h1>
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
            <hr></hr>
        </div>

    )

}