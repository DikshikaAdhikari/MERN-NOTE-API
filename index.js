const express = require("express");
const dotenv = require("dotenv");
//onst logger = require("./middleware/logger.js");
const noteRoute = require("./routes/noderoute.js");


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
//app.use(logger());

//featuresss
app.use("/api/notes", noteRoute)

// Server Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;