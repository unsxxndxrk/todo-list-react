import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import 'materialize-css';
import Tasks from './components/Tasks';
import About from './components/About';

function App() {
    return (
        <div className="App">
            <Router>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo App-Title">ToDo List</Link>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <Link to="/">Tasks</Link>
                        </li>
                        <li className="tab">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="content-wrapper">
                        <Switch>
                            <Route exact path="/">
                                <Tasks />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;