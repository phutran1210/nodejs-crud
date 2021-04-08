const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send(err, "err");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const aliens = await Alien.findById(req.params.id);
    res.json(aliens);
  } catch (err) {
    res.send(err, "err");
  }
});

router.post("/", async (req, res) => {
  const aliens = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await aliens.save();
    res.json(a1);
  } catch (err) {
    res.send(err, "err");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a1 = await aliens.save();
    res.json(a1);
  } catch (err) {
    res.send("err", err);
  }
});

module.exports = router;