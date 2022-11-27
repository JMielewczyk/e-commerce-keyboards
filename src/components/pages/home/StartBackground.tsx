import React, {useState} from 'react'

const StartBackground = () => {
    const [started, setStarted] = useState(false)

    const handleStarted = () => {
        setStarted(prevValue => !prevValue)
    }

    return (
        <>
        <div className={started ? "startBackground active" : "startBackground"}>
        </div>
            <div className={started ? 'startLayout active' : 'startLayout'}>
             <h1 className='company-name'>keyboards</h1>
            <p className="startText">Find your best clickers</p>
            <button onClick={handleStarted} className='btnGetStarted'>Enter<p className='enter-symbol'>⮐</p></button>
        </div>
        </>
    )
}

export default StartBackground