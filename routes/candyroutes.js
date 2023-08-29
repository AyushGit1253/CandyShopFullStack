// routes/candyRoutes.js
const express = require('express');
const router = express.Router();
const candyController = require('../controller/candycontroller');

router.post('/add-candy', candyController.createCandy);
router.get('/get-candy', candyController.getAllCandy);
router.get('/get-candy/:id', candyController.getCandyById);
router.put('/update-candy/:id', candyController.updateCandy);

module.exports = router;
