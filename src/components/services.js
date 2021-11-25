import axious from 'axios';

export function getTasks(){
    return axios.get("http://localhost:4000/tasks")
}

export function addTask(task){
    return axios.post("http://localhost:4000/add_task", task)
}