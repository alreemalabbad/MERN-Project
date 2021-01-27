const { Chat } = require('../models/s.model');

module.exports.createChat = (request, response) => {
    const { name, message } = request.body;
    Chat.create({name, message})
        .then(Chat => response.json(Chat))
        .catch((err) => response.status(400).json(err))
    }

module.exports.getAllChats = (request, response) => {
    Chat.find({})
        .then(Chats => response.json(Chats))
        .catch((err) => response.status(400).json(err))
    }

module.exports.getChat = (request, response) => {
    Chat.findOne({_id:request.params.id})
        .then(Chat => response.json(Chat))
        .catch((err) => response.status(400).json(err))
    }

module.exports.updateChat = (request, response) => {
    Chat.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(updateChat => response.json(updateChat))
        .catch((err) => response.status(400).json(err))
    }

// module.exports.deleteChat = (request, response) => {
//     Chat.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch((err) => response.status(400).json(err))
//     }