import React from 'react';
import "./content.css";
import './content2.css'
import './admin.css';
import Content from './Content';
import Griveancepage from './Griveancepage';
import Login from './Login';
import {Route, Routes} from "react-router-dom";


import Admin from './Admin';



function App() {
  return (
       <>
          <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/Griveancepage' element={<Griveancepage/>}/>
            {/* <Route path='/GriveanceEdit' element={<GrievanceEdit/>}/> */}
            <Route path='/Admin' element={<Admin/>}/>

          </Routes>
       </>
     
  );
}

export default App;

