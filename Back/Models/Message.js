const {Schema, model} = require('mongoose')

const MessageScheme = Schema ({
    content: {
        type: String, 
        required: true
    }})

    module.exports = model('Usuario',MessageScheme)