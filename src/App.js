import { Audio } from 'react-loader-spinner'
import { useState } from 'react';
import './App.css';
import SearchResult from './search-result/indec';

function App() {
  const [searchValue, setsearch]=useState('')
  const [search_results, setResults]=useState([])
  const [loading, setloading]=useState(false)
  const changeInput=(event)=>{
    setsearch(event.target.value)
    
  }
  const searchInput=(event)=>{
    if (event.key === 'Enter'){
      setloading(true)
      let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;
      
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          let { search_results } = jsonData;
          if (search_results !== null || search_results !== undefined){
            setResults(search_results)
          }
          
          setloading(false)
        });
    }
  }


  return (
    <div className="main-container">
      <div className="wiki-search-header">
        <img className="wiki-logo" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt='winiki' />
        <br />
        <input onKeyDown={searchInput} onChange={changeInput} placeholder="Type a keyword and press Enter to search" type="search" className="search-input " id="searchInput" value={searchValue}/>
      </div>
      <div className='results-container'>
        { loading  ?  <div className='loading'>
       <Audio
        height="50"
        width="50"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass/> 
      </div>:<div className="search-results" id="searchResults">
        {search_results.length >0 ?<div>{search_results.map(each =>(
          <SearchResult result={each}/>
        ))}</div> :<div></div>}
      </div>}
      
      </div>
    </div>
  );
}

export default App;
