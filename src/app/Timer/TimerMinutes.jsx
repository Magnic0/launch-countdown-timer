import { useState, useEffect } from "react";
import { parseTwoDig } from "./Timer";

export function TimerMinutes({ timeState, unfoldClass, foldClass }) {
     const [flipMin, setFlipMin] = useState(false);
     useEffect(() => {
       setFlipMin(true);
       setTimeout(() => {
         setFlipMin(false);
       }, 900);
     }, [timeState]);
     
     return (
          <div className='timer__in'>
               <div className='timer__front'>
                    <div className={'timer__front--top'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__front--bot' + (flipMin ? unfoldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <div className='timer__old'>
                    <div className={'timer__old--top' + (flipMin ? foldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__old--bot'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <p>minutes</p>
          </div>
     );
}