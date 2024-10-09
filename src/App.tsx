import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';
import AOS from 'aos';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
