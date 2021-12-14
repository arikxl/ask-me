import { useState } from 'react';
// import { useSelector } from 'react-redux';

import Home from './components/Home';
import Confirm from './components/Confirm';
import Answer from './components/Answer';

function App() {
  // const step  = useSelector((state => state.step))
  // const [step, setStep] = useState(0);
  const step =0;
  
  const handleComponent = () => {
    if(step === 0) return <Home />
    if(step === 1) return <Confirm />
    if(step === 2) return <Answer />
  }
  
  return (
    <div className="container">
      {handleComponent(0)}
    </div>
  );
}

export default App;
