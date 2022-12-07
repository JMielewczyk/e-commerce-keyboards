import React, {useContext} from 'react'

import { BackgroundContext } from '../../../App'

const StartBackground = () => {
    
    const { startingLayout: started , handleStartingLayout: handleBackground } = useContext(BackgroundContext)

    return (
        <>
        <div className={started ? 'startBackground' : 'startBackground active'}>
        </div>
            <div className={started ? 'startLayout' : 'startLayout active'}>
             <h1 className='company-name'>keyboards</h1>
            <p className='startText'>Find your best clickers</p>
            <button onClick={() => handleBackground()} className='btnGetStarted'>Enter<p className='enter-symbol'>⮐</p></button>
        </div>
        </>
    )
}

export default StartBackground