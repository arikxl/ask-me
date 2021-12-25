import React from 'react'

export const MyContext = React.createContext();
const MyProvider = (props) => {

    const state = {
        question: 'test!'
    }

    const setState= (value )=> {
        state.question = value
    }

    const handleQuestion = (value) => {
        console.log('question:', value)
        setState(value)
    }

    return (
        <>
            <MyContext.Provider value={{
                state: state,
                setQuestion: handleQuestion
            }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export default MyProvider   
