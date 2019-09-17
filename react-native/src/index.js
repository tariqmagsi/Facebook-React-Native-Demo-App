const express = require("express");
const profileRoutes = require("./profile-routes/profile-routes");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(profileRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
