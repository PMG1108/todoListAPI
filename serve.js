const express = require("express")
const app = express()
const connectionDB = require("./src/configs/db")
const AuthRoute = require("./src/Routes/auth.route");
const TodoRoute = require("./src/Routes/todo.route")

require("dotenv").config({ quiet: true })

const port = 1108;
app.use(express.json())

app.use("/auth", AuthRoute);
app.use("/todo", TodoRoute);

    (async () => {
        await connectionDB();
        app.listen(port, () => {
            console.log("Serve is running in port: ", port)
        })
    })();

app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message })
})