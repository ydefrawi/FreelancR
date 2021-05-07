const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      user_id: req.session.user_id,
      project_id: req.params.id,
    });

    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/addBid', withAuth, async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bidData = await Bid.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bidData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(bidData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;