var express = require('express');
// const User = require('../models').User;  //sequelize
const User = require('../schemas/user');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const users = await User.find({provider: {$in: [null]}});
    res.json(users);

  } catch (e) {
    console.error(e);
    next(e);
  }

});

router.post('/', async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    const result = await user.save();
    console.log('result', result);
    if (!result) {
      res.status(401).send('server error');
      return;
    }
    res.status(201).json(result);

  } catch (e) {
    console.error(e);
    next(e);
  }

});

module.exports = router;
