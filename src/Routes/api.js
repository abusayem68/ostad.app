const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// blog routes
router.get('/blog/add', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/update', blogController.update);
router.get('/blog/delete', blogController.delete);

// blog details routes
router.get('/blogDetails/add', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/update', blogDetailsController.update);
router.get('/blogDetails/delete', blogDetailsController.delete);

// comment Controller routes
router.get('/comment/add', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/update', commentController.update);
router.get('/comment/delete', commentController.delete);

// message Controller routes
router.get('/message/add', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/update', messageController.update);
router.get('/message/delete', messageController.delete);

// portfolio Controller routes
router.get('/portfolio/add', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/update', portfolioController.update);
router.get('/portfolio/delete', portfolioController.delete);

// product Controller routes
router.get('/product/add', productController.create);
router.get('/product/read', productController.read);
router.get('/product/update', productController.update);
router.get('/product/delete', productController.delete);

// profit Controller routes
router.get('/profit/add', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/update', profitController.update);
router.get('/profit/delete', profitController.delete);

// project Controller routes
router.get('/project/add', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/update', projectController.update);
router.get('/project/delete', projectController.delete);

// service Controller routes
router.get('/service/add', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/update', serviceController.update);
router.get('/service/delete', serviceController.delete);

// title Controller routes
router.get('/title/add', titleController.create);
router.get('/title', titleController.read);
router.get('/title/update', titleController.update);
router.get('/title/delete', titleController.delete);

module.exports = router;
