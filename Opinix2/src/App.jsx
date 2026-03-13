import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Polls from './pages/Polls';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polls" element={<Polls />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;