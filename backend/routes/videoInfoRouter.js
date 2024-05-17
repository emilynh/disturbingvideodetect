// routes/videoRoutes.js

const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoInfoController');

// router.post('/api/check-video', videoInfoController.getVideoInfo);
router.post('/', videoController.getVideoInfo);


module.exports = router;
