const express = require('express');
const router = express.Router();
const controllers = require('../controllers/comments-controllers');

// Post new comments:
router.post('/', controllers.save);

// Get One comments
router.get('/:id', controllers.selectOne);

// Get All comments
router.get('/', controllers.selectAll);

// Update One comments
router.put('/:id', controllers.update);

// Delete One comments
router.delete('/:id', controllers.destroy);

module.exports = router;