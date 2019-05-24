const express = require('express');
const router = express.Router();

var authors_controller = require('../controllers/authors');
var books_controller = require('../controllers/books');
var borrows_controller = require('../controllers/borrows');
var categories_controller = require('../controllers/categories');
var copies_controller = require('../controllers/copies');
var employees_controller = require('../controllers/employees');
var members_controller = require('../controllers/members');
var publishers_controller = require('../controllers/publishers');

// GET ROUTERS
router.get('/authors',authors_controller.authors_update_get);
router.get('/books',books_controller.books_update_get);
router.get('/borrows',borrows_controller.borrows_update_get);
router.get('/categories',categories_controller.categories_update_get);
router.get('/copies',copies_controller.copies_update_get);
router.get('/employees',employees_controller.employees_update_get);
router.get('/members',members_controller.members_update_get);
router.get('/publishers',publishers_controller.publishers_update_get);


// POST ROUTERS
router.post('/authors',authors_controller.authors_update_post);
router.post('/books',books_controller.books_update_post);
router.post('/borrows',borrows_controller.borrows_update_post);
router.post('/categories',categories_controller.categories_update_post);
router.post('/copies',copies_controller.copies_update_post);
router.post('/employees',employees_controller.employees_update_post);
router.post('/members',members_controller.members_update_post);
router.post('/publishers',publishers_controller.publishers_update_post);
module.exports = router;