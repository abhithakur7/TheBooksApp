const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const multer = require("multer");
const Book = require("../models/index");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

router.get("/test", (req, res) => res.send("book route testing!"));

router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No Books found" }));
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: "No Book found" }));
});

const cloudUpload = upload.fields([{ name: "data" }, { name: "cover" }]);

router.post("/", cloudUpload, async (req, res) => {
  try {
    const image = req.files.cover[0];

    const result = await cloudinary.uploader.upload(image.path, {
      folder: "covers",
    });
    const book = await Book.create({
      cover: {
        id: result.public_id,
        url: result.secure_url,
      },
      ...JSON.parse(req.body.data),
    });
    fs.unlink(image.path, function (err) {
      if (err) throw err;
    });
    res.json({ msg: "Book added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Unable to add this book" });
  }
});

router.put("/:id", cloudUpload, async (req, res) => {
  try {
    const image = req.files.cover[0];
    const result = await cloudinary.uploader.upload(image.path, {
      folder: "covers",
    });

    const data = await Book.findById(req.params.id);
    if (data.cover.id) {
      await cloudinary.uploader.destroy(data.cover.id);
    }
    const book = await Book.findByIdAndUpdate(req.params.id, {
      cover: {
        id: result.public_id,
        url: result.secure_url,
      },
      ...JSON.parse(req.body.data),
    });
    fs.unlink(image.path, function (err) {
      if (err) throw err;
    });
    res.json({ msg: "Updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Unable to update the Database" });
  }
});

router.delete("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book.cover.id) {
    await cloudinary.uploader.destroy(book.cover.id);
  }
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
});

module.exports = router;
