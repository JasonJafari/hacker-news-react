import React from 'react'; 
 
import './App.scss'; 
import Header from './components/Header'; 
import News from './components/News'; 
import { NewProvider } from './shared/context/new-context'; 
 
const App = () => { 
  return ( 
    <NewProvider > 
      <div className="App"> 
        <Header /> 
        <News /> 
      </div> 
    </NewProvider> 
  ); 
} 
 
export default App; 
