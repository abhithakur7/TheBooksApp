const express = require("express");
const router = express.Router();

const Book = require("../models/index");

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

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added successfully" }))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: "Unable to add this book" });
    });
});

router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
});

router.post("/delete_all", (req, res) => {
  Book.deleteMany()
    .then((book) => res.json({ mgs: "All book entries deleted successfully" }))
    .catch((err) =>
      res.status(404).json({ error: "Unable to delete the enteries" })
    );
});

module.exports = router;
