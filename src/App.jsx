import React from 'react'; 
 
import './App.scss'; 
import Header from './components/Header'; 
import News from './components/News'; 
import { NewProvider } from './shared/context/new-context'; 
import Loader from './components/Loader'; 
 
const App = () => { 
  return ( 
    <NewProvider > 
      <div className="App"> 
        <Header /> 
        <News /> 
        <Loader /> 
      </div> 
    </NewProvider> 
  ); 
} 
 
export default App; 
