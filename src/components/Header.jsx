import React, { useContext, useEffect } from 'react'; 
 
import './Header.scss' 
import { NewContext } from '../shared/context/new-context'; 
import { LoaderContext } from '../shared/context/loader-context'; 
 
const Header = () => { 
    var timer; 
    var timerCounter; 
 
    const [getNewItems, setNewItems] = useContext(NewContext); 
    const [getloader, setloader] = useContext(LoaderContext); 
 
    useEffect(() => { 
        if (getloader.firstvalue == 0) { 
            fetch(`http://hn.algolia.com/api/v1/search?tags=front_page`) 
                .then(results => results.json()) 
                .then(data => { 
                    const NewNews = [] 
                    data.hits.map(item => { 
                        const NewNew = { 
                            id: item.objectID, 
                            title: item.title, 
                            author: item.author, 
                            score: item.points, 
                            time: item.created_at, 
                            link: item.url, 
                            Summary: item.story_text 
                        } 
                        NewNews.push(NewNew) 
                    }) 
                    setNewItems(NewNews) 
                    setloader({ value: 0, firstvalue: 1 }) 
                }); 
        } 
 
    }); 
 
    const handleSearch = (ev) => { 
        for (var i = setTimeout(function () { }, 0); i > 0; i--) { 
            window.clearInterval(i); 
            window.clearTimeout(i); 
            if (window.cancelAnimationFrame) window.cancelAnimationFrame(i); 
        } 
        clearTimeout(timer); 
        const searchVlue = ev.target.value; 
        if (searchVlue.length == 0) { 
            setNewItems([{ id: 1, title: "Wating for new data" }]) 
            setloader({ value: 1, firstvalue: 0 }) 
        } else if (searchVlue.length <= 2) { 
            setNewItems([{ id: 1, title: "You Shoud Add at least 3 Charachter for Showing data" }]) 
            setloader({ value: 0, firstvalue: 1 }) 
        } else { 
            setloader({ value: 1, firstvalue: 1 }) 
            timer = setTimeout(() => { 
                fetch(`http://hn.algolia.com/api/v1/search?query=${searchVlue}&tags=story&hitsPerPage=50`) 
                    .then(results => results.json()) 
                    .then(data => { 
                        const NewNews = [] 
                        data.hits.map(item => { 
                            const NewNew = { 
                                id: item.objectID, 
                                title: item.title, 
                                author: item.author, 
                                score: item.points, 
                                time: item.created_at, 
                                link: item.url, 
                                Summary: item.story_text 
                            } 
                            // console.log(item) 
                            NewNews.push(NewNew) 
                        }) 
                        if (NewNews.length == 0) { 
                            NewNews.push({ id: Math.random, title: "There is no result match with your input" }) 
                        } 
                        setNewItems(NewNews) 
                        // console.log("ok") 
                        // console.log(timer) 
                        setloader({ value: 0, firstvalue: 1 }) 
                    }); 
            }, 500); 
            timerCounter = timer.toString() + '' 
 
        } 
 
    } 
    return ( 
        <header className="header"> 
            <h1>hacker news: </h1> 
            <input type="text" placeholder="Please search" onChange={handleSearch} onKeyUp={handleSearch} /> 
        </header> 
    ); 
} 
 
export default Header;