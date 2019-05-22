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

// GET ROUTERS
router.get('/authors',authors_controller.authors_create_get);
router.get('/belongs_to',belongs_to_controller.belongs_to_create_get);
router.get('/books',books_controller.books_create_get);
router.get('/borrows',borrows_controller.borrows_create_get);
router.get('/categories',categories_controller.categories_create_get);
router.get('/copies',copies_controller.copies_create_get);
router.get('/employees',employees_controller.employees_create_get);
//router.get('/members',members_controller.members_create_get);
router.get('/permanent_employees',permanent_employees_controller.permanent_employees_create_get);
router.get('/publishers',publishers_controller.publishers_create_get);
router.get('/reminder',reminder_controller.reminder_create_get);
router.get('/temporary_employees',temporary_employees_controller.temporary_employees_create_get);
router.get('/written_by',written_by_controller.written_by_create_get);


// POST ROUTERS
router.post('/authors',authors_controller.authors_create_post);
router.post('/belongs_to',belongs_to_controller.belongs_to_create_post);
router.post('/books',books_controller.books_create_post);
router.post('/borrows',borrows_controller.borrows_create_post);
router.post('/categories',categories_controller.categories_create_post);
router.post('/copies',copies_controller.copies_create_post);
router.post('/employees',employees_controller.employees_create_post);
router.all('/members',members_controller.members_create_post);
router.post('/permanent_employees',permanent_employees_controller.permanent_employees_create_post);
router.post('/publishers',publishers_controller.publishers_create_post);
router.post('/reminder',reminder_controller.reminder_create_post);
router.post('/temporary_employees',temporary_employees_controller.temporary_employees_create_post);
router.post('/written_by',written_by_controller.written_by_create_post);
module.exports = router;