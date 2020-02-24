module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "regionalStatistics",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            timestamp: {
                type: DataTypes.DATE
            },
            // ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            countryCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // ISO 3166-2 (https://en.wikipedia.org/wiki/ISO_3166-2)
            subdivisionCode: {
                type: DataTypes.STRING,
                allowNull: true
                // allowNull defaults to true
            },
            infectedCases: {
                type: DataTypes.INTEGER
            },
            deadCases: {
                type: DataTypes.INTEGER
            },
            recoveredCases: {
                type: DataTypes.INTEGER
            }
        },
        {}
    );
};
