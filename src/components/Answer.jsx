import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';



import { MyContext } from '../components/context';

const Answer = () => {

    const context = useContext(MyContext);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        context.setAnswer();
        setAnswer(context.state.answer)
    }, [])

    const changeAnswer = () => {
        context.setAnswer();
        setAnswer(context.state.answer)
    }

    return (
        <div>
            <h3>התשובה שלך היא:</h3>
            <div className="viewer">
                {answer}
            </div>
            <div className="animate__animated
             animate__bounceIn animate__delay-1s">
                <hr />
                <button className="btn" onClick={() => changeAnswer()}>
                     תשובה חדשה בבקשה
                </button>
                <Link to={"/ask-me"}>
                    <button className="btn" onClick={() => context.setReset()}>
                        להתחיל שוב
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Answer
