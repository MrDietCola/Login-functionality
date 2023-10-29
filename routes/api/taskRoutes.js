const router = require('express').Router();
const { User, TaskForUser, Task } = require('../../models');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll();
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one task
router.get('/:id', async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id, {
      include: [{ model: User, through: TaskForUser, as: 'user_by_task' }]
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new task
router.post('/', async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a task
router.put('/:id', async (req, res) => {
  try {
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskData[0]) {
      res.status(404).json({ message: 'No task with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a tasktask
router.delete('/:id', async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: 'No task found with that id!' });
      return;
    }

    res.status(200).json(taskData, 'Task has been removed');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
