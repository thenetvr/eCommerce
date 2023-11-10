const express = require('express');
const router = express.Router()

// import path & handlebars for email templating
const fs = require('fs')
const handlebars = require("handlebars")

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("ProjectId", process.env.PROJECT_ID);


router.get("/signUp", async (req, res) => {
    try {

        var raw = JSON.stringify({
            "username": req.headers.username,
            "password": req.headers.password
          });
          
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://player-auth.services.api.unity.com/v1/authentication/usernamepassword/sign-up", requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result),res.json(JSON.parse(result));})
        .catch(error => console.log('error', error));

    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
})


module.exports = router;
