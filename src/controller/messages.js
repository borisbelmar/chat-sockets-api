const Message = require('../models/Message')

const findAll = async (req, res) => {
  try {
    const data = await Message.find().populate({
      path: "user",
      model: "User"
    })
    .exec()
    res.status(200).send(data)
  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const findById = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Message.findById(id).populate({
      path: "user",
      model: "User"
    })
    .exec()
    data ? res.status(200).send(data) : res.sendStatus(404)
  } catch(err) {
    res.status(500).send(err)
  }
}

const create = async (req, res) => {
  try {
    const data = req.body;
    const newData = new Message(data)
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
    const result = await Message.findByIdAndUpdate(id, data)
    res.status(200).send(result)
  } catch(err) {
    res.status(500).send(err)
    console.log(err)
  }
}

const deleteById = async (req, res) => {
    try {
        const {id} = req.params
        const result = await Message.findByIdAndRemove(id)
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