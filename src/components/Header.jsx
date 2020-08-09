import React from 'react'; 
 
import './Header.scss' 
 
const Header = () => { 
    return ( 
        <header className="header"> 
            <h1>hacker news: </h1> 
            <input type="text" placeholder="Please search" /> 
        </header> 
    ); 
} 
 
export default Header;