import React, { useRef, useState } from 'react'

const Home = () => {

    const textInput = useRef();
    const [showBtn, setShowBtn] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = () => {
        if (textInput.current.value.length > 5) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };

    const handleSubmit = () => {
        const question = textInput.current.value;
        if (question.length > 30) {
            setShowError(true)
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
