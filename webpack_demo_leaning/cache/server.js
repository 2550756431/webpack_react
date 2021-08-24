const express = require("express");
const app = express()
app.use(express.static("lib", { maxAge: 1000 * 3600 }));
app.listen(3000);