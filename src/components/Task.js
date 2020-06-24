import React, { useState, useContext } from 'react'
import { DarkMode } from '../App'

function Task(props) {
    const [isEditing, setEditing] = useState(false)
    const { darkMode } = useContext(DarkMode)

    const saveThisTodo = event => {
        let id = Number(event.target.getAttribute('data-id'))
        let newTask = document.getElementById(id).value
        props.saveTodo(id, newTask)
        setEditing(false)
    }   

    return (
        !isEditing ?
            <div className={`card horizontal ${darkMode && 'blue-grey darken-1'}`}>
                <div className="card-stacked">
                    <div className={`card-content ${darkMode && 'white-text'}`}>
                        <p>{props.todo.task}</p>
                    </div>
                    <div className="card-action">
                        <a href="/#" data-id={props.todo.id} onClick={props.removeTask} className="done">Done!</a>
                        <a href="/#" onClick={() => setEditing(true)} className="edit">Edit</a>
                        <div>{darkMode}</div>
                    </div>
                </div>
            </div>
        :
        <div className={`card horizontal ${darkMode && 'blue-grey darken-1'}`}>
            <div className="card-stacked">
                <div className="card-content">
                    <input id={props.todo.id} defaultValue={props.todo.task}></input>
                </div>
                <div className="card-action">
                    <a data-id={props.todo.id} href="/#" onClick={saveThisTodo}>Save</a>
                </div>
            </div>
        </div>
    )
}

export default Task