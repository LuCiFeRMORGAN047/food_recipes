const {Router} = require('express')
const postcon = require('../controllers/Postcon')
const requireauthmid = require('../middlewares/authmiddleWare')
const router =Router()

router.post('/api/addpost',requireauthmid,postcon.addpost_post)
router.post('/api/getSingle',requireauthmid,postcon.getSingle_post)
router.get('/api/posts',requireauthmid,postcon.getall_get)
router.post('/api/save',requireauthmid,postcon.save_post)
router.post('/api/getall',requireauthmid,postcon.getall_post)
module.exports = router