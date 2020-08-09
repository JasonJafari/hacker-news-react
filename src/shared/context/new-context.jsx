import React, { createContext, useState } from 'react'; 
 
export const NewContext = createContext(); 
 
export const NewProvider = (props) => { 
    const [getNewItems, setNewItems] = useState([ 
        { 
            id: 1, 
            title: "Stephen Hawking has died", 
            author: "Cogito", 
            score: 6015, 
            time: "2018-03-14T03:50:30.000Z", 
            link: "hhtp://", 
            Summary: null  
        } 
    ]) 
    return ( 
        <NewContext.Provider 
            value={[getNewItems, setNewItems]} 
        > 
            {props.children} 
        </NewContext.Provider> 
    ) 
}