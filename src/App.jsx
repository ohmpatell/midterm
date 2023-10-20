import './App.css';
import Navbar from './components/Navbar';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form1" element={<Form1/>} />
          <Route path="/form2" element={<Form2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
