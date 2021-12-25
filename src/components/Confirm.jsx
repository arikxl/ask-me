import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';


import { MyContext } from '../components/context';



const Confirm = () => {

    const context = useContext(MyContext);

    return (
        <div>
            <h3>Your question is:</h3>
            <div className="viewer">
                {context.state.question}
            </div>
            <div className ="animate__animated
             animate__bounceIn animate__delay-1s">
                 <hr/>
                <Link to={"/answer"}>
                    <button className="btn">
                        Give me an answer
                    </button>
                </Link>
                <Link to={"/"}>
                <button className="btn">
                    Ask a new question
                </button>
                </Link>

            </div>
        </div>
    )
}

export default Confirm
