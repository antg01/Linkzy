const { News } = require('../models');

// CRUD news: 

const selectAll = async (req, res, next) => {
  try {
    const news = await News.findAll();
    console.log(news)
    res.status(200).json(news);
  } catch (error) {
    let message = "news can't be shown";
    res.status(200).json(message);
  }
};

const  save =  async (req, res, next) => {
  const data = req.body

  console.log('news',data)
    let news
    try {
    news = await News.create({...data});
    //await News.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save News.'));
  }
  res.json({ news });
}

const selectOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const news = await News.findByPk(id);
    res.status(200).json(news);
  } catch (error) {
    let message = `News ${id} can't be shown`;
    res.status(500).json(message);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
   const news = await News.destroy({ where: { id } });
    res.status(200).json(`News with id : ${id} was deleted !`);
  } catch (error) {
    let message = "News can't Delete";
    res.status(500).json(message);
  }
}

const update = async (req, res, next) => {
  const data = { ...req.body };
  const { id } = req.params;
  try {
    await News.update(data, { where: { id } });
    res.status(200).json(`Data News with id ${id} has been update`);
  } catch (error) {
    let message = "News can't be updated";
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