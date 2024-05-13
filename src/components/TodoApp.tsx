import { useState } from "react"
import { TaskList } from "./TaskList"

const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setTaskList(prevTasks => [...prevTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

  return (
    <div>
        <h1>To do List</h1>
        <div>
            <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button
                onClick={handleAddTask}
            >
            Add Task
            </button>
        </div>
        <TaskList 
            taskList={taskList}
            deleteTask={handleDeleteTask}
        >

        </TaskList>
    </div>
  )
}

export default TodoApp