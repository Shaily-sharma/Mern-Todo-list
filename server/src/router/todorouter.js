const express = require("express");
const router = express.Router();
const TodoUser = require("../model/todomodel");


router.post("/create", async (req, res) => {
  try {
    const user = new TodoUser(req.body);
    console.log(req.body);
    const insertUser = await user.save();
    res.status(201).send(insertUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/read", async (req, res) => {
  try {
    const user = req.params
    const users = await TodoUser.find(user);
    res.send(users)
  } catch (e) {
    res.status(400).send(e);
  }
})
router.get("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const taskid = req.params.id;
    const tasklist = await TodoUser.findById(taskid);
    res.send(tasklist);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const tasklist = await TodoUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(tasklist);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tasklist = await TodoUser.findByIdAndDelete(req.params.id)
    res.status(200).send({ message: "deleted!!" });
  } catch (e) {
    res.status(400).send(e);
  }
})

module.exports = router;


