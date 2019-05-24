//Tools
const express = require('express');
const router = express.Router();



//Vars
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




//Router
router.get('/authors',authors_controller.authors_list);
router.get('/belongs_to',belongs_to_controller.belongs_to_list);
router.get('/books',books_controller.books_list);
router.get('/borrows',borrows_controller.borrows_list);
router.get('/categories',categories_controller.categories_list);
router.get('/copies',copies_controller.copies_list);
router.get('/employees',employees_controller.employees_list);
router.get('/members',members_controller.members_list);
router.get('/permanent_employees',permanent_employees_controller.permanent_employees_list);
router.get('/publishers',publishers_controller.publishers_list);
router.get('/reminder',reminder_controller.reminder_list);
router.get('/temporary_employees',temporary_employees_controller.temporary_employees_list);
router.get('/written_by',written_by_controller.written_by_list);
module.exports = router;