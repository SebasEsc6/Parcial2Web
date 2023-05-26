const express = require('express');
const Message = require('../Models/Message');


const crearmessage = async (req, res = express.request ) => {
    const {message } = req.body
 
    message  = new Message( req.body );
    await message.save();
}

const listarMensajes = async (req, res = express.request) => {
    const mensajes = await Task.find().populate('user', 'name');
    try{
        
        res.status(200).json({
            ok: true,
            tasks
        })
    }catch(error){
        console.log(error);
        res.statusCode(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }



}
module.exports = {
    crearmessage
}