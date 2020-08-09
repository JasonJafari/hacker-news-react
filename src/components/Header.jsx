import React, { useContext } from 'react'; 
 
import './Header.scss' 
import { NewContext } from '../shared/context/new-context'; 
 
const Header = () => { 
    var timer; 
    const [getNewItems, setNewItems] = useContext(NewContext); 
 
    const handleSearch = (ev) => { 
        clearTimeout(timer); 
        let searchVlue = ev.target.value; 
        timer = setTimeout(() => { 
            setNewItems([{ id: 2 }, { id: 3 }, { id: 7 }]) 
            console.log(searchVlue) 
        }, 500); 
    } 
    return ( 
        <header className="header"> 
            <h1>hacker news: </h1> 
            <input type="text" placeholder="Please search" onChange={handleSearch} /> 
        </header> 
    ); 
} 
 
export default Header;