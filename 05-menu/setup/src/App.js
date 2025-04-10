import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <>
    <div className="menu">
      <h1>Our Menu</h1>
      <Categories items={items}/>
      <section className="section-center">
        <Menu items={items}/>
      </section>
      
    </div>
     
    </>
  )
}

export default App;
