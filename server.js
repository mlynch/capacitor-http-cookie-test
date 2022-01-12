var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/login", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);

  res.cookie('my.auth', 'faketoken').status(200).send();
});

app.get("/authed", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  const myAuth = req.cookies['my.auth'];

  if (myAuth != 'faketoken') {
    res.status(301).send();
    return;
  }

  res.status(200).send();
});

app.listen(9080);
