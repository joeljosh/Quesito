import React, { createContext, useState, useEffect } from "react";

export const DetailsContext = createContext()

function DetailsContextProvider(props) {

    const [qnans, setQnans] = useState(
        JSON.parse(localStorage.getItem("qnans")) || {
        qapair:[{"answer":"gravitation","question":"What is another name for gravity?"},{"answer":"Earth","question":"On what planet does gravity give weight to physical objects?"},{"answer":"galaxies","question":"What do the stars in the Universe form?"},{"answer":"infinite range","question":"What is the range of gravity?"}],
        answers:[]
        }
        )
        

    function updateQnans(data) {
        setQnans({qapair:data})
    }
    function updateAns(data){
        setQnans({...qnans, answers:[...qnans.answers,data]})
    }
    function resetAnswers(){
        setQnans({...qnans, answers:[]})
    }

    useEffect(() => {
        localStorage.setItem("qnans", JSON.stringify(qnans));
      }, [qnans]);

    const value = { qnans, updateQnans, updateAns, resetAnswers}

    return (
        <DetailsContext.Provider value={value}>
            {props.children}
        </DetailsContext.Provider>
    )
}


export default DetailsContextProvider;