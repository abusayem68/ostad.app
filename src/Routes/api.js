const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const postController = require('../Controllers/postController');
const subAdminController = require('../Controllers/subAdminController');
const userController = require('../Controllers/userController');

// Admin Controller routes
router.get('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.get('/admin/delete', adminController.delete);
router.get('/admin/update', adminController.update);
// Post Controller routes
router.get('/post/create', postController.create);
router.get('/post/read', postController.read);
router.get('/post/delete', postController.delete);
router.get('/post/update', postController.update);
// Sub admin Controller routes
router.get('/sub-admin/create', subAdminController.create);
router.get('/sub-admin/read', subAdminController.read);
router.get('/sub-admin/delete', subAdminController.delete);
router.get('/sub-admin/update', subAdminController.update);
// User Controller routes
router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);

module.exports = router;
