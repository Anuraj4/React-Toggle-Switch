import React, { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";

    return (
        <>
            <div className='toggle-switch' onClick={handleToggleSwitch} style={{ backgroundColor: isOn ? "#4caf50" : "" }}>
                <div className={`switch ${checkIsOn}`}>
                    <span className='switch-state'>{checkIsOn}</span>
                </div>
            </div>
        </>
    )
}

export default ToggleSwitch