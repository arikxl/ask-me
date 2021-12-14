import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';

// import {handleSteps} from '../index';

const Home = ({setStep}) => {

    // const step  = useSelector((state => state.step))
    const textInput = useRef();
    const [showBtn, setShowBtn] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = () => {
        if (textInput.current.value.length > 5) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
            // handleSteps(1)
        }
    };

    const handleSubmit = () => {
        const question = textInput.current.value;
        if (question.length > 30) {
            setShowError(true)
            setStep(1)
            return false
        };
    };

    return (
        <div>
            <h1>Ask a question</h1>
            <input type="text" ref={textInput}
                onChange={handleChange}
                name="question"
                className="form-control"
            />

            {showBtn &&
                <button className="btn"
                    onClick={handleSubmit}
                >
                    Next
                </button>
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
