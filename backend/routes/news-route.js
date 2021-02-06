const express = require('express');
const router = express.Router();
const controllers = require('../controllers/news-controllers');

// Post new News:
router.post('/', controllers.save);

// Get One News
router.get('/:id', controllers.selectOne);

// Get All News
router.get('/', controllers.selectAll);

// Update One News
router.put('/:id', controllers.update);

// Delete One News
router.delete('/:id', controllers.destroy);

module.exports = router;