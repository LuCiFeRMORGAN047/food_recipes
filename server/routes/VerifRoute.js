const {Router} = require('express')
const verifcon = require('../controllers/Verifcon')
const router =Router()


router.get('/api/verif',verifcon.verif_get)
module.exports = router