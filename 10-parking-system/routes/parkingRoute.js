const router = require('express').Router();

const activityController = require('../controllers/activityController')


router.get('/parking', activityController.getActivity)
router.post('/parking', activityController.createActivity)
router.put('/parking', activityController.updateActivity)
router.delete('/parking', activityController.deleteActivity)

module.exports = router;
