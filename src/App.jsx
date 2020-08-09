import React from 'react'; 
 
import './App.scss'; 
import Header from './components/Header'; 
import News from './components/News'; 
 
const App = () => { 
  return ( 
    <div className="App"> 
      <Header /> 
      <News /> 
    </div> 
   ); 
} 
 
export default App; 
