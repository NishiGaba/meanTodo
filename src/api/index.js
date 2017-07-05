//This File Acts as our API Module
'use strict';

var express = require('express');

var todos = require('../../mock/todos.json');

var router = express.Router();

//API Routes
router.get('/todos',function(req,res) {
	res.json({todos: todos});
});

module.exports = router;