const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const createAdminAccount = require("./scripts/admin");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on: http://localhost:${PORT}`);
})