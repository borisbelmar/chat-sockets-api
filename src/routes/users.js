const express = require('express')
const router = express.Router()
const {findAll, findById, create, updateById, deleteById} = require('../controller/users')

router.get('/', findAll)
router.get('/:id', findById)
router.post('/', create)
router.put('/:id', updateById)
router.delete('/:id', deleteById)

module.exports = router;