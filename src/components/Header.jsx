import React, { useContext } from 'react'; 
 
import './Header.scss' 
import { NewContext } from '../shared/context/new-context'; 
 
const Header = () => { 
    var timer; 
    const [getNewItems, setNewItems] = useContext(NewContext); 
 
    const handleSearch = (ev) => { 
        clearTimeout(timer); 
        let searchVlue = ev.target.value; 
        if (searchVlue.length <= 2) { 
            setNewItems([{ id: 1, title: "You Shoud Add at least 3 Charachter for Showing data" }]) 
        } else { 
            timer = setTimeout(() => { 
                fetch(`http://hn.algolia.com/api/v1/search?query=${searchVlue}&tags=story&hitsPerPage=50`) 
                    .then(results => results.json()) 
                    .then(data => { 
                        let NewNews = [] 
                        data.hits.map(item => { 
                            let NewNew = { 
                                id: item.objectID, 
                                title: item.title, 
                                author: item.author, 
                                score: item.points, 
                                time: item.created_at_i, 
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
                    }); 
                // console.log(searchVlue) 
            }, 500); 
        } 
 
    } 
    return ( 
        <header className="header"> 
            <h1>hacker news: </h1> 
            <input type="text" placeholder="Please search" onChange={handleSearch} /> 
        </header> 
    ); 
} 
 
export default Header;