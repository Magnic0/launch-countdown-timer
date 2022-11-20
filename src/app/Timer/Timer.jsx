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
  const [state, setState] = useState(timeInSeconds); // current state
  const [pState, setPState] = useState(timeInSeconds - 1); // previous state

  // trigger an alert when time reach zero
  if (state === 0) {
    setTimeout(() => {
      alert("Cabô");
    }, 200);
  }
  
  // make time pass for both states
  if (state > 0) {
    setTimeout(() => {
      setState(state - 1);
      setPState(pState - 1);
    }, 1000);
  }

  // specify seconds state to fulfill each timestamp
  //current
  const minState = Math.floor(state / 60);
  const hourState = Math.floor(minState / 60);
  const dayState = Math.floor(hourState / 24);
  //previous
  const pMinState = Math.floor(pState / 60);
  const pHourState = Math.floor(pMinState / 60);
  const pDayState = Math.floor(pHourState / 24);

  // transform state to show each timestamp in app frontend
  // current
  const seconds = state % 60;
  const minutes = minState % 60;
  const hours = hourState % 24;
  const days = dayState;
  //previous
  const pSeconds = pState % 60;
  const pMinutes = pMinState % 60;
  const pHours = pHourState % 24;
  const pDays = pDayState;

  return (
    <section className='timer'>
        <TimerNumber
          timeState={days}
          pTimeState={pDays}
          unfoldClass={unfoldClass}
          foldClass={foldClass}
          timeStamp={"days"}
        />
        <TimerNumber
          timeState={hours}
          pTimeState={pHours}
          unfoldClass={unfoldClass}
          foldClass={foldClass}
          timeStamp={"hours"}
        />
        <TimerNumber
          timeState={minutes}
          pTimeState={pMinutes}
          unfoldClass={unfoldClass}
          foldClass={foldClass}
          timeStamp={"minutes"}
        />
        <TimerNumber
          timeState={seconds}
          pTimeState={pSeconds}
          unfoldClass={unfoldClass}
          foldClass={foldClass}
          timeStamp={"seconds"}
        />
    </section>
  )
}
