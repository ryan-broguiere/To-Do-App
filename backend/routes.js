const express = require("express");
const task = require("./task");
const Task = require("./task");
const router = express.Router();

  router.post("/add_task", async (request, response) => {
    const task = new Task(request.body)
    
    task.save();
    response.json(task);
  });


  router.get("/tasks", async (request,response) => {
    const tasks = await Task.find();

    response.json(tasks);
  });



  router.delete("/tasks/delete/:taskId", async (request, response) => {
    const result = await Task.findByIdAndDelete(request.params.taskId)
    response.json(result)
  });

  router.put("/tasks/addedtasks/:taskId", async (request, response) => {
    const task = await Task.findById(request.params.taskId);
    
    task.status = !task.status;
    task.date = new Date();

    task.save();

    response.json(task);
  });
module.exports = router;