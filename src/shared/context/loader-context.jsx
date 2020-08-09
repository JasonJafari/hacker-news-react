import React, { createContext, useState } from 'react'; 
 
export const LoaderContext = createContext(); 
 
export const LoaderProvider = (props) => { 
    const [getloader, setloader] = useState({ 
        value: 1,firstvalue:0 
    }) 
    return ( 
        <LoaderContext.Provider 
            value={[getloader, setloader]} 
        > 
            {props.children} 
        </LoaderContext.Provider> 
    ) 
}