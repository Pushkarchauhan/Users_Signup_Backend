const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema.js");
const { default: mongoose } = require("mongoose");
const passport = require("../auth.js");
const localAuthmiddleware = passport.authenticate("local", { session: false });

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new userSchema(data); // Creating a new person
    const response = await newPerson.save(); // Saved a new person
    console.log("data saved");

    const payload = {
      id: response._id,
      name: response.name,
    };

    const token = generateToken(payload);
    console.log(`Token is : ${token}`);

    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.get("/", localAuthmiddleware, async (req, res) => {
  try {
    const data = await userSchema.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await userSchema.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found " });
    }

    console.log("data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await userSchema.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data delete");
    res.status(200).json({ error: "Person delete Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

module.exports = router;
