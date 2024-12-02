//implimented by sadasivan.
var express = require('express');
var router = express.Router();
//require controller
var controller = require('../Controller/data')

router.post('/yyy',controller.logs);
router.post('/resgister',controller.user_registration);
router.post('/logins',controller.login_api);
//api for task creation.
router.post('/tasks',controller.create_task);

//api for get all task .
router.get('/tasks',controller.get_all_tasks);

//api for task updation based on status.
router.put('/tasks/:id',controller.update_task);

//api for task deletion.
router.delete('/tasks/:id',controller.delete_task);

////api for get status details.
router.get('/tasks/status/:status',controller.filter_task);



module.exports = router;
