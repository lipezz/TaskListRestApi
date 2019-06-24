var mongoose = require('mongoose'), 
  task = mongoose.model('task');
  
class TaskController {

  allTasks(req, res) {
    task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  createTask(req, res) {
    var newTask = new task(req.body);
    newTask.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  readTask(req, res) {
    task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  updateTask(req, res) {
    task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  deleteTask(req, res) {
    task.remove({_id: req.params.taskId}, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };

}

module.exports = new TaskController();