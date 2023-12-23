var HRService = require('./HRService');
var createHRControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await HRService.createHRDBService(req.body);
    console.log(status);
    if (status) {
        res.send({ "status": true, "message": "HR created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}


var loginHRControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await HRService.loginHRDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}
module.exports = { createHRControllerFn, loginHRControllerFn };