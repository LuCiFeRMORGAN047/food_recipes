const {Router} = require('express')
const auth = require('../controllers/Authcon')
const requireauthmid = require('../middlewares/authmiddleWare')
const router =Router()


router.post('/api/signup' ,auth.signup_post)
router.post('/api/login' ,auth.login_post)
router.get('/api/logout',requireauthmid ,auth.logout_get)


module.exports = router