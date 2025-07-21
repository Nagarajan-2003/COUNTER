import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Counter:{count} </h1>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button onClick={()=>setCount(count-1)}>subtract</button>
      <button onClick={()=>setCount(0)}>reset</button>

    </div>
  )
}

export default App