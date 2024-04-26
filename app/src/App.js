import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import LogNew from './pages/LogNew';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<LogNew />} />
          <Route path="/in" element={<CheckIn />} />
          <Route path="/out" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
