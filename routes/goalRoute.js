const express = require('express')
const router = express.Router()
const goalCtrl = require('../controllers/goalController')
const userCtrl = require('../controllers/userController')


router.post('/', userCtrl.auth, goalCtrl.create)


router.get('/', goalCtrl.index)


router.put('/:id', userCtrl.auth, goalCtrl.update)


router.delete('/:id', userCtrl.auth, goalCtrl.delete)


router.post('/:id/achieved', userCtrl.auth, goalCtrl.achieved)





module.exports = router