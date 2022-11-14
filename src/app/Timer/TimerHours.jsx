import { useState, useEffect } from "react";
import { parseTwoDig } from "./Timer";

export function TimerHours({ timeState, unfoldClass, foldClass }) {
     const [flipHour, setFlipHour] = useState(false);
     useEffect(() => {
       setFlipHour(true);
       setTimeout(() => {
         setFlipHour(false);
       }, 900);
     }, [timeState]);
     
     return (
          <div className='timer__in'>
               <div className='timer__front'>
                    <div className={'timer__front--top'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__front--bot' + (flipHour ? unfoldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <div className='timer__old'>
                    <div className={'timer__old--top' + (flipHour ? foldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__old--bot'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <p>hours</p>
          </div>
     );
}
