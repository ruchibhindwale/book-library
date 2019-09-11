const express = require('express');

const router = express.Router();

router.get('/list/books', api.getPravachans);
router.post('/pravachans', api.createPravachan);
router.get('/pravachan/:pid', api.getPravachan);
router.put('/pravachan/:pid', api.updatePravachan);
router.post('/storeSubscription', subscriptionService.storeSubscription);
router.post('/postNotification', subscriptionService.postNotification);

module.exports = router;
