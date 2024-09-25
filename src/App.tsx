import React from 'react';
import './App.css';
import Home1 from './views/pages/Home/Home1/Home1';
import Home2 from './views/pages/Home/Home2/Home2';


const App:React.FC = () => {
  return (
    <div>
      <Home1 />
      {/* <Home2 /> */}
    </div>
  )
}

export default App;