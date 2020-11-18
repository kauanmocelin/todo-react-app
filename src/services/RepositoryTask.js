const LOCAL_STORAGE_TASKS = 'todoapp.tasks'

export const getAll = () => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS)) || []
    return storedTasks
}

export const save = (tasks) => {
    return localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(tasks))
}
