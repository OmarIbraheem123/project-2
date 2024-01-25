const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')



//POST
router.post('/', userCtrl.createUser)


//POST
router.post('/login', userCtrl.loginUser)


//GET
router.get('/:id', userCtrl.auth, userCtrl.showUser)


//PUT
router.put('/:id', userCtrl.auth, userCtrl.updateUser)


//DELETE

router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)


module.exports = router