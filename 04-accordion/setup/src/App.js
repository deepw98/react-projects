import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
  return (
    <main>
    <div className='container'>
    <h3>Questions about login</h3>
      <section className="info">
        {data.map((dataItem)=>{
          return <SingleQuestion dataItem={dataItem}/>
        })}
      </section>
    </div>
    </main>
  )
}

export default App;
