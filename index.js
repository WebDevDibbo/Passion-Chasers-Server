
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Course Api running");
});
app.get("/course-categories", (req, res) => {
  res.send(courseCategories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((c) => c._id === id);
  res.send(selectedCourses);
  console.log(req.params);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_news = courses.filter((c) => c.category_id === id);
  res.send(category_news);
});
app.listen(port, () => {
  console.log("Courses running on port ", port);
});
