const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema.js");
const { default: mongoose } = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new userSchema(data); // Creating a new person
    const response = await newPerson.save(); // Saved a new person
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.get("/", async (req, res) => {
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

    if(!response) {
        return res.status(404).json({error: 'Person not found '})
    }

    console.log("data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.delete('/:id', async(req,res) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await userSchema.findByIdAndDelete(personId);
        
    } catch (error) {
        
    }
})

module.exports = router;
