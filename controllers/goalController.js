const Goal = require('../models/goals')

// //POST
// router.post('/', goalCtrl.create)

// //GET
// router.get('/', goalCtrl.index)

// //PUT
// router.put('/:id', goalCtrl.update)

// //DELETE
// router.delete('/:id', goalCtrl.delete)



exports.create = async function create (req, res) {
    try {
        const createdGoal = await Goal.create(req.body)
        req.user.goals.push(createdGoal._id)   
        await req.user.save()
        res.status(200).json(createdGoal)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

exports.index = async function (req, res) {
    try {
        const foundGoals = await Goal.find({})
        res.status(200).json(foundGoals)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

exports.update = async function update(req, res) {
    try {
        const updatedGoal = await Goal.findOneAndUpdate({'_id': req.params.id}, req.body, {new: true})
                res.status(200).json(updatedGoal)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}



exports.delete = async function destory(req, res) {
    try {
        await Goal.findOneAndDelete({'_id': req.params.id })
        req.user.goals.pull(req.params.id)
        await req.user.save()
        res.status(200).json({msg: 'Deleted Goal'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


exports.achieved = async function achieved (req, res) {
    try {
       req.user.goals.pull(req.params.id)
        req.user.achievedGoals.push( req.params.id)
        await req.user.save()
        res.status(200).json(req.user)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}