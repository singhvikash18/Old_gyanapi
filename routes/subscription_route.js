const router = require('express').Router();

const subs_route = require('../controller/subs_controller')

router.get('/all',subs_route.subsController);

router.get('/:category_id',subs_route.subsCategoryController);
module.exports = router;