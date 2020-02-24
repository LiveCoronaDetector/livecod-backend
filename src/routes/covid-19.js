const Router = require("express").Router;
const db = require("../database");

const router = Router();

router.get("/covid-19/:countryCode?/:subdivisionCode?", async (req, res) => {
    // load params if present and convert it to upper case
    let countryCode =
        req.params.countryCode && req.params.countryCode.toUpperCase();
    let subdivisonCode =
        req.params.subdivisionCode && req.params.subdivisionCode.toUpperCase();

    // set SQL WHERE options
    let where = {};
    if (countryCode) where.countryCode = countryCode;
    if (subdivisonCode) where.subdivisionCode = subdivisonCode;

    // find those queries
    const rs = await db.RegionalStatistics.findAll({
        where: where
    });

    return res.json({
        success: true,
        data: rs
    });
});

router.post("/covid-19/:countryCode/:subdivisionCode?", async (req, res) => {
    // load params if present and convert it to upper case
    let countryCode =
        req.params.countryCode ? req.params.countryCode.toUpperCase() : undefined;
    let subdivisonCode =
        req.params.subdivisionCode ? req.params.subdivisionCode.toUpperCase() : undefined;

    console.log(req.body);
    
    // find those queries
    const rs = await db.RegionalStatistics.create({
        countryCode: countryCode,
        subdivisionCode: subdivisonCode,
        infectedCases: req.body.infectedCases,
        deadCases: req.body.deadCases,
        recoveredCases: req.body.recoveredCases,
        timestamp: req.body.timestamp
    });

    return res.json({
        success: true,
        data: rs
    });
});

module.exports = router;
