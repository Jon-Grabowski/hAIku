import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PageContent from './components/PageContent';
import Archive from './components/Archive';
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<PageContent />}/>
        <Route exact path='/archive' element={<Archive />}/>

      </Routes>
    </div>
  );
}

export default App;
