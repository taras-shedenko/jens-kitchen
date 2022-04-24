import fs from "fs";
import path from "path";
import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(3000, () =>
  console.log("Jen's Kitchen is up and running at port 3000")
);
