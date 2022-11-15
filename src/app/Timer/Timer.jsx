import React, { useState } from 'react';
import { TimerNumber } from './TimerNumber';

// object that specifies initial time
const time = {
  days: 1,
  hours: 0,
  minutes: 0,
  seconds: 0
}

// convert initial time to seconds
const timeInSeconds = (

  (time.days * 86400) // day to seconds
  +
  (time.hours * 3600) // hour to seconds
  +
  (time.minutes * 60) // minutes to seconds
  +
  (time.seconds)

);

// variables to store the Sass animation className
const unfoldClass = ' unfold';
const foldClass = ' fold';

// function that make numbers have at least 2 digits
export function parseTwoDig(num) {
  return (num).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2
    }
  )
}

// main component
export function Timer() {
  const [state, setState] = useState(timeInSeconds);

  // trigger an alert when time reach zero
  if (state === 0) {
    setTimeout(() => {
      alert("Cabô");
    }, 200);
  }
  
  // make time pass
  if (state > 0) {
    setTimeout(() => {
      setState(state - 1);
    }, 1000);
  }

  // specify seconds state to fulfill each timestamp
  const minState = Math.floor(state / 60);
  const hourState = Math.floor(minState / 60);
  const dayState = Math.floor(hourState / 24);

  // transform actual state to show each timestamp in app frontend
  const seconds = state % 60;
  const minutes = minState % 60;
  const hours = hourState % 24;
  const days = dayState;

  return (
    <section className='timer'>
      <TimerNumber
        timeState={days}
        unfoldClass={unfoldClass}
        foldClass={foldClass}
        timeStamp={"days"}
      />

      <TimerNumber
        timeState={hours}
        unfoldClass={unfoldClass}
        foldClass={foldClass}
        timeStamp={"hours"}
      />

      <TimerNumber
        timeState={minutes}
        unfoldClass={unfoldClass}
        foldClass={foldClass}
        timeStamp={"minutes"}
      />

      <TimerNumber
        timeState={seconds}
        unfoldClass={unfoldClass}
        foldClass={foldClass}
        timeStamp={"seconds"}
      />
    </section>
  )
}
