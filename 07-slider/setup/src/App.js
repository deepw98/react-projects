import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [index,setIndex] = useState(0)
  const person = data[index]
  const {id,name,title,image,quote} = person

  function prevBtn(){
    if(index===0){
      setIndex(data.length-1)
    }else{
      setIndex(index-1)
    }
  }

  function nextBtn(){
    if(index===data.length-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  useEffect(()=>{
    setTimeout(nextBtn,4000)
  })
  return (
    <>
         <article key={id}>
            <h1>Reviews</h1>
            <div>
              <img className='person-img' src={image} alt={name} />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{quote}</p>
            </div>
            <button onClick={prevBtn}><FiChevronLeft/></button>
            <button onClick={nextBtn}><FiChevronRight/></button>
            <button><FaQuoteRight/></button>
          </article>
    
    </>
  )
}

export default App;
