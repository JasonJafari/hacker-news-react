import React, { useContext } from 'react'; 
 
import './News.scss'; 
import New from './New'; 
import { NewContext } from '../shared/context/new-context'; 
 
const News = () => { 
 
    const [getNewItems, setNewItems] = useContext(NewContext); 
 
    return ( 
        <section className="news"> 
            { 
                getNewItems.map(item => { 
                    let summery = item.Summary 
                    if (summery == null || summery.length == 0) { 
                        summery = "there was not any story about this new." 
                    } 
                    else { 
                        summery += '' 
                    } 
                    if (summery.length >= 70) { 
                        summery = summery.substring(0, 70) 
                    } 
                    summery += ' ...' 
                    summery = summery.replace(/<\/?[^>]+(>|$)/g, ""); 
                    return ( 
                        <New 
                            key={item.id} 
                            title={item.title} 
                            author={item.author} 
                            score={item.score} 
                            time={item.time} 
                            link={item.link} 
                            Summary={summery} 
                        /> 
                    ) 
                }) 
            } 
 
        </section> 
 
    ); 
} 
 
export default News;