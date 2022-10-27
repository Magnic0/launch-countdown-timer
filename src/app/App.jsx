import { useEffect } from 'react'
import { useState } from 'react'

export function App() {
  const initialState = 3;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    if(count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  });

  useEffect(() => {
    if(count == 0) {
      setTimeout(() => {
        alert("Done!");
      }, 100);
    }
  })

  return (
    <div>
      <h1>We're launching at {count}</h1>
    </div>
  )
}
