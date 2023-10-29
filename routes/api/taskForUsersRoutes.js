const router = require('express').Router();
const { User, TaskForUser, Task } = require('../../models');

// GET all taskForUsers
router.get('/', async (req, res) => {
  try {
    const taskForUserData = await TaskForUser.findAll();
    res.status(200).json(taskForUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one taskForUser
router.get('/:id', async (req, res) => {
  try {
    const taskForUserData = await TaskForUser.findByPk(req.params.id);
    if (!taskForUserData) {
      res.status(404).json({ message: 'No taskForUsersTaskForUser with this id!' });
      return;
    }
    res.status(200).json(taskForUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  try {
    const taskForUserData = await TaskForUser.create(req.body);
    res.status(200).json(taskForUserData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const taskForUserData = await TaskForUser.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskForUserData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(taskForUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const taskForUserData = await TaskForUser.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!taskForUserData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(taskForUserData, 'User has been removed');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
