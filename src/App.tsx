import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Team from './views/pages/Team/Team';
import Gallery from './views/pages/Gallery/Gallery';
import Service from './views/pages/Service/Service';
import About from './views/pages/About/About';
import Home1 from './views/pages/Home/Home1/Home1';
import Home2 from './views/pages/Home/Home2/Home2';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default App;
