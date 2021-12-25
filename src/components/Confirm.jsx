import React from 'react';
import { useContext } from 'react';


import { MyContext } from '../components/context';


const Confirm = () => {

    const context = useContext(MyContext).state.question;
    console.log('context:', context)

    return (
        <div>
            {context}
            NEXT
        </div>
    )
}

export default Confirm
