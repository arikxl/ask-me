import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
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
            <h1>Ask a question</h1>
            <input type="text" ref={textInput}
                onChange={handleChange}
                name="question"
                className="form-control"
                />

            {showBtn && !showError &&
                <Link to={!showError ? "/confirm" : '/'}>
                    <button className="btn animate__animated animate__fadeIn">
                        Next
                    </button>
                </Link>
            }
            {showError &&
                <div className="error">
                    The question is too long
                </div>
            }
        </div>
    );
};

export default Home;
