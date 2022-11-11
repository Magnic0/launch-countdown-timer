import React, { useState } from 'react';
import { useEffect } from 'react'

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

// function that make numbers have at least 2 digits
function parseTwoDig(num) {
  return (num).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2
    }
  )
}

const unfoldClass = ' unfold';
const foldClass = ' fold';

// main function
export function Timer() {
  const [state, setState] = useState(timeInSeconds);
  
  // make time pass
  if(state === 0) {
    setTimeout(() => {
      alert("Cabô");
    }, 200);
  }
  
  if(state > 0) {
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
  
  // logic for the flip animation
  const [flipSec, setFlipSec] = useState(false);
  useEffect(() => {
    setFlipSec(true);
    setTimeout(() => {
      setFlipSec(false);
    }, 900);
  },[seconds]);

  const [flipMin, setFlipMin] = useState(false);
  useEffect(() => {
    setFlipMin(true);
    setTimeout(() => {
      setFlipMin(false);
    }, 900);
  },[minutes]);

  const [flipHour, setFlipHour] = useState(false);
  useEffect(() => {
    setFlipHour(true);
    setTimeout(() => {
      setFlipHour(false);
    }, 900);
  },[hours]);

  const [flipDay, setFlipDay] = useState(false);
  useEffect(() => {
    setFlipDay(true);
    setTimeout(() => {
      setFlipDay(false);
    }, 900);
  },[days]);

  return (
    <section className='timer'>
            <div className='timer__in'>
        <div className='timer__front'>
          <div className={'timer__front--top'}>
            <p>{parseTwoDig(days)}</p>
          </div>

          <div className={'timer__front--bot' + (flipDay ? unfoldClass : '')}>
            <p>{parseTwoDig(days)}</p>
          </div>
        </div>

        <div className='timer__old'>
          <div className={'timer__old--top' + (flipDay ? foldClass : '')}>
            <p>{parseTwoDig(days)}</p>
          </div>

          <div className={'timer__old--bot'}>
            <p>{parseTwoDig(days)}</p>
          </div>
        </div>

        <p>days</p>
      </div>

      <div className='timer__in'>
        <div className='timer__front'>
          <div className={'timer__front--top'}>
            <p>{parseTwoDig(hours)}</p>
          </div>

          <div className={'timer__front--bot' + (flipHour ? unfoldClass : '')}>
            <p>{parseTwoDig(hours)}</p>
          </div>
        </div>

        <div className='timer__old'>
          <div className={'timer__old--top' + (flipHour ? foldClass : '')}>
            <p>{parseTwoDig(hours)}</p>
          </div>

          <div className={'timer__old--bot'}>
            <p>{parseTwoDig(hours)}</p>
          </div>
        </div>

        <p>hours</p>
      </div>

      <div className='timer__in'>
        <div className='timer__front'>
          <div className={'timer__front--top'}>
            <p>{parseTwoDig(minutes)}</p>
          </div>

          <div className={'timer__front--bot' + (flipMin ? unfoldClass : '')}>
            <p>{parseTwoDig(minutes)}</p>
          </div>
        </div>

        <div className='timer__old'>
          <div className={'timer__old--top' + (flipMin ? foldClass : '')}>
            <p>{parseTwoDig(minutes)}</p>
          </div>

          <div className={'timer__old--bot'}>
            <p>{parseTwoDig(minutes)}</p>
          </div>
        </div>

        <p>minutes</p>
      </div>

      <div className='timer__in'>
        <div className='timer__front'>
          <div className={'timer__front--top'}>
            <p>{parseTwoDig(seconds)}</p>
          </div>

          <div className={'timer__front--bot' + (flipSec ? unfoldClass : '')}>
            <p>{parseTwoDig(seconds)}</p>
          </div>
        </div>

        <div className='timer__old'>
          <div className={'timer__old--top' + (flipSec ? foldClass : '')}>
            <p>{parseTwoDig(seconds)}</p>
          </div>

          <div className={'timer__old--bot'}>
            <p>{parseTwoDig(seconds)}</p>
          </div>
        </div>

        <p>seconds</p>
      </div>
    </section>
  )
}
