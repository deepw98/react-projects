import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [index,setIndex] = useState(0)

  function prevBtn(){
    if(index===0){
      setIndex(data.length-1)
    }else{
      setIndex(index-1)
    }
  }

  function nextBtn(){
    
  }
  return (
    <>
      {data.map((dataItem)=>{
        const {id,image,name,title,quote} = dataItem
        return(
          <article>
            <h1>Reviews</h1>
            <div>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{quote}</p>
            </div>
            <button ><FiChevronLeft/></button>
            <button><FiChevronRight/></button>
          </article>
        )
      })}
    </>
  )
}

export default App;
