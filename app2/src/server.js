const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "app2",
    message: "Welcome to App 2"
  });
});

app.get("/time", (req, res) => {
  res.json({
    timestamp: new Date().toISOString()
  });
});

app.get("/users/:id", (req, res) => {
  res.json({
    userId: req.params.id
  });
});

const PORT = process.env.PORT || 3001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App2 running on port ${PORT}`);
  });
}

module.exports = app;