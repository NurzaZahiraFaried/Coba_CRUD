const router = require('express').Router();
const contentController = require ('../controllers/contentController')

router.get('/', contentController.index);
router.post('/store', contentController.store);
router.put('/update', contentController.update);
router.post('/delete/:id', contentController.delete);

module.exports = router;