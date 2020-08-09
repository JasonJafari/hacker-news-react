import React, { useContext } from 'react'; 
 
import './Loader.scss' 
import { LoaderContext } from '../shared/context/loader-context'; 
 
const Loader = () => { 
    const [getloader, setloader] = useContext(LoaderContext); 
    // console.log(getloader) 
    return ( 
        <section 
            className="news loader-main" 
            style={{ 
                display: getloader.value ? 'flex' : "none" 
            }} 
        > 
            <div className="loader"></div> 
        </section> 
    ); 
} 
 
export default Loader;