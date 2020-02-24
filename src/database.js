const Sequelize = require("sequelize");
const config = require("config");

const databaseConfig = config.get("database");

const sequelize = new Sequelize(databaseConfig.databaseName, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Successfully connected to the database.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

const models = {};

models.RegionalStatistics = require("./models/RegionalStatistics")(
    sequelize,
    Sequelize
);

sequelize
    .sync({ alter: true })
    .then((result) => {
        console.log("Synced models");
    })
    .catch((err) => {
        console.error("Failed to sync models");
    });

module.exports = models;
