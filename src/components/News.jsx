import React, { useContext } from 'react'; 
 
import './News.scss'; 
import New from './New'; 
import { NewContext } from '../shared/context/new-context'; 
 
const News = () => { 
 
    const [getNewItems, setNewItems] = useContext(NewContext); 
 
    return ( 
        <section className="news"> 
            { 
                getNewItems.map(item=>( 
                    <New  
                        key={item.id} 
                        title={item.title} 
                        author={item.author} 
                        score={item.score} 
                        time={item.time} 
                        link={item.link} 
                        Summary={item.Summary} 
                    /> 
                )) 
            } 
                          
        </section> 
 
    ); 
} 
 
export default News;