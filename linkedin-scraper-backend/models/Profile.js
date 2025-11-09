const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // SQLite file
});

const Profile = sequelize.define("Profile", {
  name: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  about: { type: DataTypes.TEXT }, // LinkedIn "About" section
  bio: { type: DataTypes.TEXT }, // LinkedIn headline/bio line
  location: { type: DataTypes.STRING },
  followerCount: { type: DataTypes.INTEGER },
  connectionCount: { type: DataTypes.INTEGER },
});

module.exports = { sequelize, Profile };
