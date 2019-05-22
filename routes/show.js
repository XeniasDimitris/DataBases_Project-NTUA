const express = require('express');
const router = express.Router();

var authors_controller = require('../controllers/authors');
var belongs_to_controller = require('../controllers/belongs_to');
var books_controller = require('../controllers/books');
var borrows_controller = require('../controllers/borrows');
var categories_controller = require('../controllers/categories');
var copies_controller = require('../controllers/copies');
var employees_controller = require('../controllers/employees');
var members_controller = require('../controllers/members');
var permanent_employees_controller = require('../controllers/permament_employees');
var publishers_controller = require('../controllers/publishers');
var reminder_controller = require('../controllers/reminder');
var temporary_employees_controller = require('../controllers/temporary_employess');
var written_by_controller = require('../controllers/wirtten_by');

//router.get('/authors',authors_controller.authors_list);
router.all('/members',members_controller.members_list);

module.exports = router;