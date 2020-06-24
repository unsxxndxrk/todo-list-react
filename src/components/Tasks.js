import React, { useState, useEffect, useContext } from 'react'
import Task from '../components/Task'
import { DarkMode } from '../App'

function Tasks() {
  const [todos, setTodo] = useState([])
  const { darkMode } = useContext(DarkMode)

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodo([
        ...todos,
        {
          id: Date.now(),
          task: event.target.value
        }
      ])
      document.getElementById('input').value = ''
    }
  }

  const saveTodo = (id, newTask) => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        todo.task = newTask
        return todo
      }
      return todo
    }))  
  }

  const removeTask = event => {
    const taskId = Number(event.target.getAttribute('data-id'))
    setTodo(todos.filter(todo => todo.id !== taskId))
  } 

  useEffect(() => {
    const localStorageTodos = localStorage.getItem('todos')
    setTodo(JSON.parse(localStorageTodos))
    document.getElementById('input').setAttribute('focused', true)
}, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className={`tasks ${darkMode && 'tasks-dark'}`}>
        <div className="input-wrap">
            <input 
                type="text" 
                placeholder="Add your task"
                onKeyPress={addTodo}
                id="input"
            >
            </input>
        </div>
        <div className="tasks-wrap">
        { 
            todos.map(todo => (
                <Task key={todo.id} todo={todo} removeTask={removeTask} saveTodo={saveTodo} />
            ))
        }
        </div>
    </div>
  )
}

export default Tasks