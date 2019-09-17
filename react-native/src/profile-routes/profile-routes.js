const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router();
const auth = require("../midleware/auth");

routes.post("/profiles", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    const token = await profile.generateAuthToken();

    res.send({ success: true, profile, token });
  } catch (e) {
    res.send({ message: "This Email is Already Exists", success: false });
  }
});

routes.post("/profiles/login", async (req, res) => {
  try {
    const profile = await Profiles.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await profile.generateAuthToken();
    res.status(201).send({ profile, token, success: true });
  } catch (e) {
    res.send({ e, success: false, error: "Email or Password Incorrect" });
  }
});

routes.post("/profiles/logout", auth, async (req, res) => {
  try {
    const { profile, token } = req;
    profile.tokens = profile.tokens.filter(t => t.token !== token);
    await profile.save();
    res.send({ profile, success: true });
  } catch (e) {
    res.send({ e, success: false, error: "You are already logged out" });
  }
});

module.exports = routes;
