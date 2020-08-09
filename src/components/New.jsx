import React from 'react'; 
 
import './New.scss' 
 
const New = () => { 
    return ( 
        <div className="new"> 
            <h2>Stephen Hawking has died</h2> 
            <ul> 
                <li className="author">Author: Cogito</li> 
                <li className="score">Score: 6015</li> 
                <li><time datetime="2018-03-14T03:50:30.000Z"> created at :2018-03-14T03:50:30.000Z  </time></li> 
                <li><a href="#">Source</a></li> 
            </ul> 
            <p> 
                abstraction: full stack engineer (I know some of you are rolling your eyes right now, just 
                highlighting that I have experience on frontend apps as well as backend architecture). 
                been working professionally for ~7 years building mostly javascript projects but also some PHP. 
            </p> 
        </div> 
    ); 
} 
 
export default New;