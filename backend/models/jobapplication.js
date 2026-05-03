"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobApplication.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  JobApplication.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      company: DataTypes.STRING,
      role: DataTypes.STRING,
      description: DataTypes.TEXT,
      ctc: DataTypes.DECIMAL(10, 2),
      location: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM("APPLIED", "INTERVIEW", "OFFER", "REJECTED"),
        defaultValue: "APPLIED",
      },
      appliedDate: DataTypes.DATE,
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "JobApplication",
      timestamps: true,
    },
  );
  return JobApplication;
};
