const User = require('../models/User')

const findAll = async (req, res) => {
  try {
    const data = await User.find()
    res.status(200).send(data)
  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const findById = async (req, res) => {
  const { id } = req.params
  try {
    const data = await User.findById(id)
    data ? res.status(200).send(data) : res.sendStatus(404)
  } catch(err) {
    res.status(500).send(err)
  }
}

const create = async (req, res) => {
  try {
    const data = req.body;
    const newData = new User(data)
    const result = await newData.save()
    res.status(200).send(result)
  } catch(err) {
    res.status(500).send(err)
  }
}

const updateById = async (req, res) => {
  try {
    const {id} = req.params 
    const data = req.body
    const result = await User.findByIdAndUpdate(id, data)
    res.status(200).send(result)
  } catch(err) {
    res.status(500).send(err)
    console.log(err)
  }
}

const deleteById = async (req, res) => {
    try {
        const {id} = req.params
        const result = await User.findByIdAndRemove(id)
        res.status(200).send(result)
    } catch(err) {
        res.status(500).send(err)
        console.log(err)
    }
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById
};