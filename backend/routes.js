const express = require("express");
const Task = require("./task");
const router = express.Router();

router.post("/add_task", async (request, response) => {
    const task = new Task(request.body)
    
    try {
      await task.save();
      response.send(task);
    } catch (error) {
      response.send(error);
    }


});

router.get("/tasks", async (request, response) => {
    const tasks = await Task.find({});
  
    try {
      response.send(tasks);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = router;