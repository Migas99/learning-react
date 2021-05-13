const express = require("express");
const app = express();

const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const apiURL = "https://translation.google.apis.com";

const axiosConfig = axios.create({
  baseURL: apiURL,
});

app.get("", (req, res) => {
  return res.status(200).json({ Server: "The Server is running!" });
});

app.post("/translate", async (req, res) => {
  try {
    // const response = await axiosConfig.post(
    //   "/language/translate/v2",
    //   {},
    //   {
    //     params: {
    //       q: req.sentence,
    //       target: req.language,
    //       key: key,
    //     },
    //   }
    // );

    // return res.status(200).json(response);
    return res.json({
      data: `Tried to translate: "${req.body.sentence}" to ${req.body.language}`,
    });
  } catch (err) {
    console.log(err);
    return res.json({ err: "We did our best boys!" });
  }
});

//Initialize the server
app.listen(3000);

//Additional information
console.log("Server is listenning on: http://localhost:3001 .");
