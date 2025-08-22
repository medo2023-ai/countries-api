import Header from './compenets/header';
import './App.css';
import Countries from './compenets/countries';
import { Routes,Route } from 'react-router-dom';
import Mainlayout from './compenets/mainlayout';
import Info from './compenets/info';
import { Con } from './js/context';
import { useState } from 'react';

function App() {
   const[darkmode,setDarkmode]=useState(false);

  return (
    <>
    <Con.Provider value={{darkmode,setDarkmode}}>
       <Routes>
      <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Countries/>}/>
      <Route path='info/:name' element={<Info/>}/>
      </Route>
    </Routes>
    </Con.Provider>
   
    </>
  )
}

export default App
