const express = require("express")
const app = express()
const connectionDB = require("./src/configs/db")
const AuthRoute = require("./src/Routes/auth.route");
const TodoRoute = require("./src/Routes/todo.route")

require("dotenv").config({ quiet: true })

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/auth", AuthRoute);
app.use("/todo", TodoRoute);
app.get("/", (req, res) => {
  res.send("Todo API is runninggggggggg");
});
    (async () => {
        await connectionDB();
        app.listen(PORT, () => {
            console.log("Serve is running in PORT: ", PORT)
        })
    })();

app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message })
})
