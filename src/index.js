const express = require("express");
const config = require("config");
const db = require("./database");

const serverConfig = config.get("server");

const app = express();
const port = serverConfig.port;

app.use(express.json())
app.use(express.urlencoded())

app.use("/v1", require("./routes/covid-19"));

app.listen(port, () => {
    console.log(`Server started`);
});