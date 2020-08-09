import React, { createContext, useState } from 'react'; 
 
export const NewContext = createContext(); 
 
export const NewProvider = (props) => { 
    const [getNewItems, setNewItems] = useState([{}]) 
    return ( 
        <NewContext.Provider 
            value={[getNewItems, setNewItems]} 
        > 
            {props.children} 
        </NewContext.Provider> 
    ) 
}