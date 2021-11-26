const express = require("express");
const task = require("./task");
const Task = require("./task");
const router = express.Router();

  router.post("/add_task", async (request, response) => {
    try{
    const task = new Task(request.body)    
    task.save();
    response.json(task);
    }
    catch(error)
    {
      response.send(error)
    }
  });


  router.get("/tasks", async (request,response) => {
    try{
    const tasks = await Task.find();
    response.json(tasks);
    }
    catch(error){
      response.send(error)
    }
  });



  router.delete("/tasks/delete/:taskId", async (request, response) => {
    try{
    const result = await Task.findByIdAndDelete(request.params.taskId)
    response.json(result)
    }
    catch(error)
    {
      response.send(error)
    }
  });

  router.put("/tasks/addedtasks/:taskId", async (request, response) => {
    try{
    const task = await Task.findById(request.params.taskId);    
    task.status = !task.status;
    task.date = new Date();
    task.save();
    response.json(task);
    }
    catch (error) {
      response.send(error)
      
    }
  });
module.exports = router;