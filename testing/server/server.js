const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
dotenv.config();

const app = express();

app.set("port", process.env.PORT);

app.use((req, res, next) => {
  morgan("dev")(req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

app.get("/api/host", (req, res) => {
  res.send({ host: "kjk" });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "서버열었다.");
});
