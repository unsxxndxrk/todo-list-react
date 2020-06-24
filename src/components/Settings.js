import React, { useContext } from 'react'
import { DarkMode } from '../App'

function Settings () {
    const { darkMode, setDarkUI } = useContext(DarkMode);

    return (
        <div>
            <div className="switch">
                <label>
                Light mode
                <input type="checkbox" onChange={setDarkUI} checked={darkMode}></input>
                <span className="lever"></span>
                Dark mode
                </label>
            </div>
        </div>
    )
}

export default Settings
