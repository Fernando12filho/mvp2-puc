import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';
import About from './Components/About.js';

//React Router eh aplicado 

function App() {
  return (
    <Router className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
    </Router>
  );
}

export default App;
