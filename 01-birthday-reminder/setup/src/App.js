import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users,setUsers] = useState(data)
  return (
    <>
    <div className='container'>
      <h1>{users.length}Birthdays Today</h1>
      <ul>
        {users.map((user)=>{
          const {id,image,name,age} = user
          return(
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })}
      </ul>
    </div>
      
    </>
  )
}

export default App;
