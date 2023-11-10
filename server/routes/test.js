const express = require('express');
const router = express.Router()

// import path & handlebars for email templating
const fs = require('fs')
const handlebars = require("handlebars")


router.get("/", async (req, res) => {
  try {
    res.json({ 
      "hello": "worlds"});
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

module.exports = router;
