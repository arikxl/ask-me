import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from 'react';

import { MyContext } from './context';

const Home = () => {
    
    const context = useContext(MyContext); 
    const textInput = useRef();
    const [showBtn, setShowBtn] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = () => {
        const question = textInput.current.value;
        if (question.length > 30) {
            setShowError(true)
            toast('🦄השאלה ארוכה מדי',{
                position: toast.POSITION.TOP_RIGHT
            })
        } else {
            setShowError(false)
        }
        if (question.length > 5) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        };
        context.setQuestion(question);
    };
    
    return (
        <div>
            <h1>מה השאלה שלך?</h1>
            <input type="text" ref={textInput}
                onChange={handleChange}
                name="question"
                className="form-control"/>
            {showBtn && !showError &&
                <Link to={!showError ? "/confirm" : '/'}>
                    <button className="btn animate__animated animate__fadeIn">
                        בואו נגלה
                    </button>
                </Link>
            }
        </div>
    );
};

export default Home;
