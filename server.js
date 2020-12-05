const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const PORT = 5005;

//set up to receive JSON and string data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes as middleware
app.use("/api", apiRoutes)

//server listening
app.listen(PORT, () => console.log(`listning at http://localhost:${PORT}`));