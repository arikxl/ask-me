import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';

import { MyContext } from '../components/context';

const Confirm = () => {

    const context = useContext(MyContext);

    return (
            <div>
                <h3>השאלה שלך היא:</h3>
                <div className="viewer">
                    {context.state.question}
                </div>
                <div className="animate__animated
             animate__bounceIn animate__delay-1s">
                    <hr />
                    <Link to={"/answer"}>
                        <button className="btn">
                             תן לי תשובה בבקשה
                        </button>
                    </Link>
                    <Link to={"/Ask-Me"}>
                        <button className="btn">
                            שאלה חדשה
                        </button>
                    </Link>

                </div>
            </div>
    )
}

export default Confirm
