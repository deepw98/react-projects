import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
  return (
    <>
    <section className='container'>
    <h1>Questions about login</h1>
      {data.map((dataItem)=>{
        return <SingleQuestion dataItem={dataItem}/>
      })}
    </section>
     
    </>
  )
}

export default App;
