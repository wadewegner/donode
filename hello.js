const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App running on :${process.env.PORT}`);
});
app.get("/", (req, res) => {
  return res.status(200).json({ ok: true, message: "OK", status: 200 });
});
