import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './components/Home';
import Answer from './components/Answer';
import Confirm from './components/Confirm';

function App() {
  
  return (
    <div>
    <BrowserRouter>
      <div className="container">
            <Routes>
              <Route path="/ask-me" element={<Home />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="/answer" element={<Answer />} />
            </Routes>
      </div>
    </BrowserRouter>
            <ToastContainer limit={2}/>
    </div>
  );
}

export default App;
