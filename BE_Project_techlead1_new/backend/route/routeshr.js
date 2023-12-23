var express = require('express');
var HRController = require('../src/student/HRController');
const router = express.Router();
router.route('/student/loginhr').post(HRController.loginHRControllerFn);
router.route('/student/createhr').post(HRController.createHRControllerFn);
module.exports = router;