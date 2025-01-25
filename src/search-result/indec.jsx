import React from 'react'
import './index.css'
const SearchResult = (props) => {
    const {result} =props
    const { link, title, description } = result;
  return (
    <div className='result-container'>
  <a className='title' href={link} target='_blank' rel='noopener noreferrer'>
    {title}
  </a>
  <br/>
  <a className='link' href={link} target='_blank' rel='noopener noreferrer'>
    {link}
  </a>
  <br/>
  <p>{description}</p> 
</div>

  )
}

export default SearchResult
