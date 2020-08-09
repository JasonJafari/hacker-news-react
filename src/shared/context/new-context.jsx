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
            Summary: `abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP.` 
        }, 
        { 
            id: 2, 
            title: "Stephen Hawking has died", 
            author: "Cogito", 
            score: 6015, 
            time: "2018-03-14T03:50:30.000Z", 
            link: "hhtp://", 
            Summary: `abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP.` 
        }, 
        { 
            id: 3, 
            title: "Stephen Hawking has died", 
            author: "Cogito", 
            score: 6015, 
            time: "2018-03-14T03:50:30.000Z", 
            link: "hhtp://", 
            Summary: `abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP.` 
        }, 
        { 
            id: 4, 
            title: "Stephen Hawking has died", 
            author: "Cogito", 
            score: 6015, 
            time: "2018-03-14T03:50:30.000Z", 
            link: "hhtp://", 
            Summary: `abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP.` 
        }, 
        { 
            id: 5, 
            title: "Stephen Hawking has died", 
            author: "Cogito", 
            score: 6015, 
            time: "2018-03-14T03:50:30.000Z", 
            link: "hhtp://", 
            Summary: `abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP.` 
        }, 
]) 
    return ( 
        <NewContext.Provider 
            value={[getNewItems, setNewItems]} 
        > 
            {props.children} 
        </NewContext.Provider> 
    ) 
}