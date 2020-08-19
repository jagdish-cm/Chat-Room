const express = require("express");

const app = express();

var i = 0;

app.use("/api/users", (req, res, next) => {
  const users = [
    {
      username: "Kutriya Sala",
      age: 21,
      country: "UK",
      gender: "male",
      id: "aj2j3o4j1"
    },
    {
      username: "Shraddha",
      age: 22,
      country: "AUS",
      gender: "female",
      id: "ajdjalsjldjf22"
    }
  ];
  res.status(200).send({
    message: "All users are here",
    users: users
  });
});

module.exports = app;
