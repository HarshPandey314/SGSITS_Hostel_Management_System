const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const studentsRoutes = require("./src/students/routes");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", studentsRoutes);

app.listen(port, () => console.log("listening on port ${port}"));
