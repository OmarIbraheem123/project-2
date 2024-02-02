const express = require('express')
const router = express.Router()
const goalCtrl = require('../controllers/goalController')
const userCtrl = require('../controllers/userController')


//POST
router.post('/', userCtrl.auth, goalCtrl.create)

//GET
router.get('/', goalCtrl.index)

//PUT
router.put('/:id', userCtrl.auth, goalCtrl.update)

//DELETE
router.delete('/:id', userCtrl.auth, goalCtrl.delete)

//POST 
router.post('/:id/achieved', userCtrl.auth, goalCtrl.achieved)





module.exports = router