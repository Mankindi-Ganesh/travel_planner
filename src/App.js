import React from 'react';
import {  Route, Routes} from 'react-router-dom';
 import Homepage from './components/Homepage';
import MyNavbar from './components/MyNavbar';
import './App.css'; // Ensure the correct path to App.css
import 'bootstrap/dist/css/bootstrap.min.css';
//import { GrDiamond } from 'react-icons/gr';
import Grid from './components/grid';

function App() {
  return (
    <>
      <MyNavbar />
    <Routes>
     
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Grid/>}/>
      </Routes>
    </>
  );
}

export default App;
