const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Static assets in production
if (process.env.NODE_ENV === "production") {
  // Set Static folder
  app.use(express.static("client/build"));

  //
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
