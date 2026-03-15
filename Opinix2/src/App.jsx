import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Polls from './pages/Polls';
import Home from './pages/Home';
import Login from './pages/Login';
import Import from './pages/Import';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/" element={<Login/>} />
        <Route path="/import" element={<Import/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;