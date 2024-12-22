import React,{useState} from "react"
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom'
import UserContextProvider from './context/userContextProvider';

function App() {
  
 
 
 
  return (
   <>
   <UserContextProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>

   </UserContextProvider>

       
   </>
  );
}

export default App;
