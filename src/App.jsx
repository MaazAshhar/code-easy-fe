import React from 'react'
import Page1 from './components/Page1'
import "./App.css";
import Page2 from './components/Page2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Page1 />} />
         <Route path='/submission' element={<Page2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App