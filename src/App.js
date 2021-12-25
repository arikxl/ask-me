import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Answer from './components/Answer';
import Confirm from './components/Confirm';

function App() {
  
  return (
      <BrowserRouter>
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
