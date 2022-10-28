import { useState } from 'react';
import { useEffect } from 'react'

const time = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 3
}

const initialState = (

  (time.days * 86400) // day to seconds
  +
  (time.hours * 3600) // hour to seconds
  +
  (time.minutes * 60) // minutes to seconds
  +
  (time.seconds)

);

export function Timer() {
  const [state, setState] = useState(initialState);
  const minState = Math.floor(state / 60);
  const hourState = Math.floor(minState / 60);
  const dayState = Math.floor(hourState / 24);
  

  useEffect(() => {
    if(state === 0) {
      setTimeout(() => {
        alert("Cabô");
      }, 200);
    }

    if(state > 0) {
      setTimeout(() => {setState(state - 1)}, 1000);
    }
  }, [state]);

  const seconds = state % 60;
  const minutes = minState % 60;
  const hours = hourState % 24;
  const days = dayState;
  
  return (
    <section>
      <div>
        <span>{days}</span>
        <span> days</span>
      </div>
      <div>
        <span>{hours}</span>
        <span> hours</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span> minutes</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span> seconds</span>
      </div>
    </section>
  )
}
