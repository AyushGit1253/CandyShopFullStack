
const Candy = require('../model/candymodel');

exports.createCandy = async (req, res) => {
  try {
    const candy = await Candy.create(req.body);
    res.status(201).json(candy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating candy.' });
  }
};

exports.getAllCandy = async (req, res) => {
  try {
    const candies = await Candy.findAll();
    res.status(200).json(candies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching candy.' });
  }
};

exports.getCandyById = async (req, res) => {
    const candyId = req.params.id;
    try {
      const candy = await Candy.findByPk(candyId);
      if (candy) {
        res.status(200).json(candy);
      } else {
        res.status(404).json({ message: 'Candy not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching candy.' });
    }
  };
  
  exports.updateCandy = async (req, res) => {
    const candyId = req.params.id;
    const updatedCandy = req.body;
    try {
      const candy = await Candy.findByPk(candyId);
      if (candy) {
        await candy.update(updatedCandy);
        res.status(200).json(candy);
      } else {
        res.status(404).json({ message: 'Candy not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating candy.' });
    }
  };
  