const { Comment } = require('../models');

// CRUD Comment: 

const selectAll = async (req, res, next) => {
  try {
    const comments = await Comment.findAll();
    console.log(comments)
    res.status(200).json(comments);
  } catch (error) {
    let message = "comments can't be shown";
    res.status(200).json(message);
  }
};

const  save =  async (req, res, next) => {
  const data = req.body

  console.log('comments',data)
    let comments
    try {
    comments = await Comment.create({...data});
    //await Comment.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save Comment.'));
  }
  res.json({ comments });
}

const selectOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const comments = await Comment.findByPk(id);
    res.status(200).json(comments);
  } catch (error) {
    let message = `comments ${id} can't be shown`;
    res.status(500).json(message);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
   const comments = await Comment.destroy({ where: { id } });
    res.status(200).json(`comments with id : ${id} was deleted !`);
  } catch (error) {
    let message = "comments can't Delete";
    res.status(500).json(message);
  }
}

const update = async (req, res, next) => {
  const data = { ...req.body };
  const { id } = req.params;
  try {
    await Comment.update(data, { where: { id } });
    res.status(200).json(`Data comments with id ${id} has been update`);
  } catch (error) {
    let message = "comments can't be updated";
    res.status(500).json(message);
  }
};

module.exports = {
  destroy,
  selectAll,
  selectOne,
  save,
  update,
}