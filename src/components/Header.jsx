import React from 'react'; 
 
import './Header.scss' 
 
const Header = () => { 
    const handleSearch = (ev) =>{ 
        console.log(ev.target.value) 
    } 
    return ( 
        <header className="header"> 
            <h1>hacker news: </h1> 
            <input type="text" placeholder="Please search" onChange={handleSearch} /> 
        </header> 
    ); 
} 
 
export default Header;