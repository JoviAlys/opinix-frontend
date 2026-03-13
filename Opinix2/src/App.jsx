import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Polls from './pages/Polls';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;