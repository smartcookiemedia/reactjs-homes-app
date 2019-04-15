var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createPool({
    host: 'devtest.cofq1ovlapvc.us-east-1.rds.amazonaws.com',
    user: 'devtest',
    password: 'devtest123',
    port: '3306',
    database: 'devtest'
});

connection.getConnection(function(err, connection) {
	if(err){
		return err;
	}
})



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/homes', function(req, res, next) {
    connection.query("SELECT * FROM homes", function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results});
    });
});


module.exports = router;