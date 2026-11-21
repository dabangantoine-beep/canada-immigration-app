const express = require('express');
const router = express.Router();
const evalController = require('../controllers/evalController');

router.post('/', evalController.submitEvaluation);
router.get('/', evalController.getAllEvaluations);

module.exports = router;
