import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='page1' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
