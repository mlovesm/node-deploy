var express = require('express');
// const { User, Comment } = require('../models'); //sequelize
const Comment = require('../schemas/comment');

var router = express.Router();

router.get('/:id', async function (req, res, next) {
  try {
    // const comments = await Comment.findAll({
    //   include: {
    //     model: User,
    //     where: { id: req.params.id },
    //   },
    // })
    const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
    if (comments) {
      console.log(comments);
      res.json(comments);
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const comment = new Comment({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    const result = await comment.save();
    if (result) {
      const result2 = await Comment.populate(result, { path: 'commenter' });
      console.log('result', result2);
      res.status(201).json(result2);
    }


  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    // const result = await Comment.update({
    //   comment: req.body.comment
    // }, 
    // { 
    //   where: {id: req.params.id}
    // });
    const result = await Comment.update(
      { _id: req.params.id },  //where
      { comment: req.body.comment },
    );
    res.json(result);

  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    // const result = await Comment.destroy({
    //   where: { id: req.params.id }
    // });
    const result = await Comment.remove(
      { _id: req.params.id }
    );
    res.json(result);

  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
