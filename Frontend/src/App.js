import React from 'react';
import  { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from "react-router-dom";


import './App.css';
import NewUser from './Component/Newuser';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Update from './Component/Update';
import Userprofile from './Component/Userprofile';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import Demo from './Component/Demo';

function App() {
  return (
    
    
   <BrowserRouter >
<Navbar/>
<Sidebar/>

<Routes>
 
<Route path='/' element ={<Home/>} />
<Route path='/Dashboard' element ={<Dashboard/>} />
   <Route  path ='/Newuser' element ={<Demo/>} /> 
    <Route path='/Update/:id' element={<Update/>} />
   <Route path='/Userprofile/:userid' element={<Userprofile/>} />
  </Routes>
   </BrowserRouter>

    
  );
}

export default App;
