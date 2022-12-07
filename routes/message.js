"use strict"
var express = require('express');
var router = express.Router();
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "ID HERE",
  key: "KEY HERE",
  secret: "SECRET HERE",
  cluster: "eu",
  useTLS: true,
});


/* POST message for the chat. */
router.post('/', function(req, res) {
  console.log(req.body)
  pusher.trigger("my-channel", "my-event", {
    username: req.body.username,
    message: req.body.message,
  });

  res.json([]);
});

module.exports = router;
