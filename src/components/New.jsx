import React from 'react'; 
 
import './New.scss' 
 
const New = (props) => { 
    return ( 
        <div className="new"> 
            <h2>{props.title}</h2> 
            <ul> 
                <li className="author">Author: {props.author}</li> 
                <li className="score">Score: {props.score}</li> 
                <li> created at :{props.time}</li> 
                <li><a href={props.link}>Source</a></li> 
            </ul> 
            <p> 
                {props.Summary} 
            </p> 
        </div> 
    ); 
} 
 
export default New;