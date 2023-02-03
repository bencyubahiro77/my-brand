const Message = require('../models/contact');

exports.createMessage = (req, res, next) => {
    const message = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
    message.save()
      .then(result => {
        res.status(201).json({
          message: 'Message created successfully',
          result: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.getMessageById = (req, res, next) => {
    Message.findById(req.params.messageId)
      .then(message => {
        if (!message) {
          return res.status(404).json({
            message: 'Message not found'
          });
        }
        res.status(200).json({
          message: message
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.getAllMessages = (req, res, next) => {
    Message.find()
      .then(messages => {
        res.status(200).json({
          messages: messages
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };