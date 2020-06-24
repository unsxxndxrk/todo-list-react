import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import 'materialize-css'
import Tasks from './components/Tasks'
import About from './components/About'
import Settings from './components/Settings'

function App() {
    const [darkMode, setDarkMode] = useState()
    const setDarkUI = event => setDarkMode(event.target.checked)

    useEffect(() => {
        const localStorageDarkMode = localStorage.getItem('darkMode')
        setDarkMode(JSON.parse(localStorageDarkMode))
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)

        let body = document.getElementById('body')
        if (darkMode) body.classList.add('body-dark')
        else body.classList.remove('body-dark')
    }, [darkMode])
    
    return (
        <div className="App">
            <Router>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <span className="brand-logo App-Title">ToDo List</span>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <Link to="/">Tasks</Link>
                        </li>
                        <li className="tab">
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li className="tab">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="content-wrapper">
                        <DarkMode.Provider value={{ darkMode, setDarkUI }}>
                            <Switch>
                                <Route exact path="/">
                                    <Tasks />
                                </Route>
                                <Route path="/settings">
                                    <Settings />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                            </Switch>
                        </DarkMode.Provider>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
export const DarkMode = React.createContext()