import React, { useState } from 'react';

export const App = () => {
  const [items, setItems] = useState([])

  return (
    <div>
      This is the a!pp!!!
      <button onClick={() => {
        setItems([...items, 'hehehe'])
      }}>click</button>
      {items.map((i, key) => {
        return <div key={key}>itemmmm</div>
      })}
    </div>
  )
}