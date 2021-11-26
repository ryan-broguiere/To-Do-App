const express = require("express");
const task = require("./task");
const Task = require("./task");
const router = express.Router();

  router.post("/add_task", async (request, response) => {
    const task = new Task(request.body)
    
    task.save();
    response.json(task);

});

  // router.post("/add_task", (request, response) => {
  //     const task = new Task({
  //       taskName: request.body.taskName
  //     })

  //     task.save();

  //     response.json(task);
  // });

  router.get("/tasks", async (request,response) => {
    const tasks = await Task.find();

    response.json(tasks);
  })

  // router.get("/tasks/:taskId", async (request, response) => {
  //   const result = await Task.findById(request.params.taskId);
  //   response.json(task)
  // })

  router.delete("/tasks/delete/:taskId", async (request, response) => {
    const result = await Task.findByIdAndDelete(request.params.taskId)
    response.json(result)
  })

  router.put("/tasks/addedtasks/:taskId", async (request, response) => {
    const task = await Task.findById(request.params.taskId);

    task.status = !task.status;

    task.save();

    response.json(task);
  })
module.exports = router;