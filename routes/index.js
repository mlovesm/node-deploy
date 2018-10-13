var express = require('express');
// const User = require('../models').User;  //sequelize
const User = require('../schemas/user');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const users = await User.find({provider: {$in: [null]}});
    res.render('mongoose', { users });

  } catch (e) {
    console.error(e);
    next(e);
  }

});


module.exports = (io) => {
  io.on('connection', function (socket) {
    console.log('connected to socket');

    socket.on('test', function () {

    });

    socket.on('disconnect', () => {
      console.log('disconnected to socket');
    });

  });

  return router;
}

