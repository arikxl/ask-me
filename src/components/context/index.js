import React from 'react'

export const answers = [ 'Yes', 'No', 'Maybe', 'Not sure... Try again', 'Call the police']
export const MyContext = React.createContext();

const MyProvider = (props) => {

    const state = {
        question: '',
        answer: '',
    }

    const setState= (value )=> {
        state.question = value
    }

    const handleQuestion = (value) => {
        setState(value)
    }

    const handleAnswer = () => {
        let answer = answers[~~(Math.random() * answers.length)];
        state.answer = answer;
    }

    const handleReset = () => {
        state.question = '';
        state.answer = '';
    }

    return (
        <>
            <MyContext.Provider value={{
                state: state,
                setQuestion: handleQuestion,
                setAnswer: handleAnswer,
                setReset: handleReset,
            }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export default MyProvider   
