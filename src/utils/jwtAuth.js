const jwt = require("jsonwebtoken");
const config = require("config");
const db = require("../database");

const authConfig = config.get("auth");

const jwtAuth = async (req, res, next) => {
    if (
        !req.get("Authorization") ||
        req.get("Authorization").indexOf("Bearer ") === -1
    ) {
        return res.status(401).json({
            success: false,
            reason:
                "You are unauthorized. Please provide your API key to access the service."
        });
    }

    let token = req
        .get("Authorization")
        .substring(7)
        .trim();

    let decoded;
    try {
        decoded = jwt.verify(token, authConfig.jwtSecret);
    } catch (err) {
        console.error(err);

        return res.status(401).json({
            success: false,
            reason: "API key invalid."
        });
    }

    if (!decoded.jti) {
        return res.status(401).json({
            success: false,
            reason: "API key invalid."
        });
    }

    let apiKey;

    try {
        apiKey = await db.ApiKey.findOne({
            where: {
                jti: decoded.jti,
                active: true
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            reason: "Internal server error"
        })
    }

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            reason: "API key invalid."
        });
    }

    req["auth"] = {
        authenticated: true
    };

    next();
};

module.exports = jwtAuth;
