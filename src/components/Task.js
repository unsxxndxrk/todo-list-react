import React, {useState} from 'react'

function Task(props) {
    const [isEditing, setEditing] = useState(false)

    const saveThisTodo = event => {
        let 
            id = Number(event.target.getAttribute('data-id')),
            newTask = document.getElementById(id).value;
        props.saveTodo(id, newTask)
        setEditing(false)
    }   

    return (
        !isEditing ?
        <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                    <p>{props.todo.task}</p>
                </div>
                <div className="card-action">
                    <a href="/#" data-id={props.todo.id} onClick={props.removeTask}>Done!</a>
                    <a href="/#" onClick={() => setEditing(true)}>Edit</a>
                </div>
            </div>
        </div>
        :
        <div className="card horizontal">
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