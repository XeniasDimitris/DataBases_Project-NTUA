const express = require('express');
const router = express.Router();

var authors_controller = require('../controllers/authors');
var books_controller = require('../controllers/books');
var categories_controller = require('../controllers/categories');
var copies_controller = require('../controllers/copies');
var employees_controller = require('../controllers/employees');
var members_controller = require('../controllers/members');
var reminder_controller = require('../controllers/reminder');

// GET ROUTERS
router.get('/authors',authors_controller.authors_delete_get);
router.get('/books',books_controller.books_delete_get);
router.get('/categories',categories_controller.categories_delete_get);
router.get('/copies',copies_controller.copies_delete_get);
router.get('/employees',employees_controller.employees_delete_get);
router.get('/members',members_controller.members_delete_get);
router.get('/reminder',reminder_controller.reminder_delete_get);

// POST ROUTERS
router.post('/authors',authors_controller.authors_delete_post);
router.post('/books',books_controller.books_delete_post);
router.post('/categories',categories_controller.categories_delete_post);
router.post('/copies',copies_controller.copies_delete_post);
router.post('/employees',employees_controller.employees_delete_post);
router.post('/members',members_controller.members_delete_post);
router.post('/reminder',reminder_controller.reminder_delete_post);

module.exports = router;