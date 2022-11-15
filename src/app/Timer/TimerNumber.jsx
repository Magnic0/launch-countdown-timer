import { useState, useEffect } from "react";
import { parseTwoDig } from "./Timer";

export function TimerNumber({ timeState, unfoldClass, foldClass, timeStamp }) {
     const [flipSec, setFlipSec] = useState(false);
     useEffect(() => {
       setFlipSec(true);
       setTimeout(() => {
         setFlipSec(false);
       }, 900);
     }, [timeState]);
     
     return (
          <div className='timer__in'>
               <div className='timer__front'>
                    <div className={'timer__front--top'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__front--bot' + (flipSec ? unfoldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <div className='timer__old'>
                    <div className={'timer__old--top' + (flipSec ? foldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__old--bot'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <p>{timeStamp}</p>
          </div>
     );
}