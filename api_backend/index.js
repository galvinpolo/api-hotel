const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database.js");

// import routes
const userRoutes = require("./routes/userRoute.js");
const mallRoutes = require("./routes/mallRoute.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/images")); // Untuk akses gambar dari folder public/images

app.use("/api/users", userRoutes);
app.use("/api/malls", mallRoutes);

// Test koneksi DB dan sync model
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync(); // Buat tabel kalau belum ada
  })
  .then(() => {
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Connection error:", err));
