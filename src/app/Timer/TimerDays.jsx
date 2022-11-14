import { useState, useEffect } from "react";
import { parseTwoDig } from "./Timer";

export function TimerDays({ timeState, unfoldClass, foldClass }) {
     const [flipDay, setFlipDay] = useState(false);
     useEffect(() => {
       setFlipDay(true);
       setTimeout(() => {
         setFlipDay(false);
       }, 900);
     }, [timeState]);

     return (
          <div className='timer__in'>
               <div className='timer__front'>
                    <div className={'timer__front--top'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__front--bot' + (flipDay ? unfoldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <div className='timer__old'>
                    <div className={'timer__old--top' + (flipDay ? foldClass : '')}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>

                    <div className={'timer__old--bot'}>
                         <p>{parseTwoDig(timeState)}</p>
                    </div>
               </div>

               <p>days</p>
          </div>
     );
}
