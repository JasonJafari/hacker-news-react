import React from 'react'; 
 
import './App.scss'; 
import Header from './components/Header'; 
import News from './components/News'; 
import { NewProvider } from './shared/context/new-context'; 
import Loader from './components/Loader'; 
import { LoaderProvider } from './shared/context/loader-context'; 
 
const App = () => { 
  return ( 
    <NewProvider > 
      <LoaderProvider > 
        <div className="App"> 
          <Header /> 
          <News /> 
          <Loader /> 
        </div> 
      </LoaderProvider> 
    </NewProvider> 
  ); 
} 
 
export default App; 
