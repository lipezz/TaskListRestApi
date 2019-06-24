
module.exports = function(app) {

  var controller = require('../controllers/taskListController');

  // todoList Routes
  app.route('/tasks')
     .get(controller.allTasks)
     .post(controller.createTask);

  app.route('/tasks/:taskId')
     .get(controller.readTask)
     .put(controller.updateTask)
     .delete(controller.deleteTask); 
};