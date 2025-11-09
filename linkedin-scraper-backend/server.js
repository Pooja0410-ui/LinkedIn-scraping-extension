const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize, Profile } = require("./models/Profile");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync DB
sequelize.sync();

// POST API to create a profile
app.post("/api/profiles", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
