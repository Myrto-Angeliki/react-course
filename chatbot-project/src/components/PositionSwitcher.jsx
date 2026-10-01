import { useState, useEffect } from 'react'
import { handlePositionSwitch } from '../utils/chatbotContainer.js'

export function PositionSwitcher({isSwitchToTop, setIsSwitchToTop}){
    const [positionSwitcherText, setPositionSwitcherText] = 
            useState(JSON.parse(localStorage.getItem('positionText')) 
                || ["Move textbox to top"]);

    useEffect(() => {
            localStorage.setItem('positionText', JSON.stringify(positionSwitcherText));
        }, [positionSwitcherText]);

    return <div className="position-switcher-container">
                <a className="position-switcher"
                    onClick={() => handlePositionSwitch(isSwitchToTop,
                                setIsSwitchToTop, setPositionSwitcherText)}
                >
                    {positionSwitcherText}
                </a>
            </div>
}