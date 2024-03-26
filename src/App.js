import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProject from './pages/MyProject';
import Home from './pages/Home';
import MyDesain from './pages/MyDesain';
import MyContact from './pages/MyContact';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/myproject' element={<MyProject/>} />
            <Route path='/mydesain' element={<MyDesain />} />
            <Route path='/mycontact' element={<MyContact/>} />
          </Routes>
        </Router>
    </div>

  );
}

export default App;
