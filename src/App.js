import { useSelector } from 'react-redux';

import Home from './components/Home';
import Confirm from './components/Confirm';
import Answer from './components/Answer';

function App() {

  const step  = useSelector((state => state.step))

  const handleComponent = () => {
    if(step === 0) return <Home />
    if(step === 1) return <Confirm />
    if(step === 2) return <Answer />
  }

  return (
    <div className="container">
      {handleComponent()}
    </div>
  );
}

export default App;
