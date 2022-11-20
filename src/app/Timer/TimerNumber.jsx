import { useState, useEffect } from "react";
import { parseTwoDig } from "./Timer";

export function TimerNumber({ timeState, pTimeState, foldClass, unfoldClass, timeStamp }) {
    const [flipSec, setFlipSec] = useState(false);

    useEffect(() => {
        setFlipSec(false);
        
        setTimeout(() => {
            setFlipSec(true);
        }, 100);
    }, [pTimeState]);

    return (
        <div className='timer__in'>
            <div className='timer__front'>
                <div className={'timer__front--top'}>
                    <p>{parseTwoDig(pTimeState)}</p>
                </div>

                <div className={'timer__front--bot' + (flipSec ? unfoldClass : '')}>
                    <p>{parseTwoDig(pTimeState)}</p>
                </div>
            </div>
            <div className='timer__old'>
                <div className={'timer__old--top' + (flipSec ? foldClass : '')}>
                    <p>{parseTwoDig(timeState)}</p>
                </div>

                <div className={'timer__old--bot' + (flipSec ? ' fade' : '')}>
                    <p>{parseTwoDig(timeState)}</p>
                </div>
            </div>
            <p>{timeStamp}</p>
        </div>
    )
}
