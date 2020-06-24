import React, { useContext } from 'react'
import { DarkMode } from '../App'

function About () {
    const { darkMode } = useContext(DarkMode)

    return (
        <div className={`about ${darkMode && 'about-dark'}`}>
            <p className="about-main">
                This is the test application for learning React Hooks and other stuff.
            </p>
            <p>
                <ul className="about-ul">
                    <li className="about-li">
                        App name: <b>ToDo List</b>
                    </li>
                    <li className="about-li">
                        App version: <b>1.0.0</b>
                    </li>
                </ul>
            </p>
            <p>
                <span className="author">
                    Created by: <a href="https://github.com/unsxxndxrk/" target="_blank" rel="noopener noreferrer">Zaviryukha Igor</a>
                </span>
            </p>
        </div>
    )
}

export default About