import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <main>
     <section className='menu section'>
      <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
      </div>
          <Categories items={items}/>
     </section>
      
     
    </main>
  )
}

export default App;
