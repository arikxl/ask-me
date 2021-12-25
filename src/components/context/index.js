import React from 'react'

export const answers = [
     'כן', 'לא', 'אולי', 'לא בטוח... שווה לנסות שוב', 'כדאי לקרוא למשטרה'
    ,'עדיף לשאול את ההורים','בטח!','אין סיכוי','לא לבנות על זה','כנראה שכן','התשובה נמצאת בך',
    'בוודאות','אין ספק שזה יקרה','כנראה שלא','הסימנים מראים שכן','עדיף לשאול מאוחר יותר',
    'עדיף לא לדעת עכשיו','אי אפשר לדעת','ממש ממש לא!','המקורות שלי אומרים שלא',
    'בספק מאוד','ככה ככה','בוודאי','לא כדאי','חבר טוב יתן לך את התשובה','👍🏻','👎🏻',
    'עדיף להתרכז בלימודים','עדיף לישון על זה','נחליט מחר','זה יקרה ב100%','השאלה לא טובה',
    'לך/י עם התחושות שלך','מה שיהיה יהיה'
]
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
