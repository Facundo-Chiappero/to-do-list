import './App.css'
import { useState, useEffect } from 'react'
import NewTask from './NewTask'

function App() {
  const [tasks, setTasks] = localStorage.getItem('tasks') ? useState(JSON.parse(localStorage.getItem('tasks'))) : useState([])
  const [inputValue, setInputValue] = useState('')
  
  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const handleAdd = async (e) => {
    e.preventDefault()
    
    const task = inputValue.trim()
    
    if (!task) return
    
    const newTask = { id: crypto.randomUUID(), task }
    setTasks([...tasks, newTask])
    setInputValue('')
  }
  
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }
  
  return (
    <>
    <h1>To Do List</h1>
    
    <div className='mainContainer'>
    <div className='inputContainer'>
    <form onSubmit={handleAdd}>
    <input 
    type='text' 
    id='task' 
    value={inputValue} 
    onChange={(e) => setInputValue(e.target.value)} 
    placeholder='Agregar nueva tarea' 
    />
    <button type="submit">Agregar</button>
    </form>
    </div>
    
    <div className='tasksContainer'>
    {tasks.map((task) => (
      <NewTask 
      key={task.id} 
      task={task.task} 
      id={task.id} 
      handleDelete={handleDelete} 
      />
    ))}
    </div>
    </div>
    </>
  )
}

export default App
