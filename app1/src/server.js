const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "app1",
    message: "Welcome to App 1"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.post("/echo", (req, res) => {
  res.json({
    youSent: req.body
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App1 running on port ${PORT}`);
  });
}

module.exports = app;