
import './App.css';
import './components/style/style.css';
import {BrowserRouter, Route, Routes }from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Schedule from './components/pages/Schedule';
import Setup from './components/pages/Setup';
import Signup from './components/pages/Signup';


function App() {
  return (
    <div>
      <Header />
      <Navigation />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/setup" element={<Setup/>} />
          <Route path="/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
