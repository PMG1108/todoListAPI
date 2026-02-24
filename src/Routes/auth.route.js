const express = require('express')
const AuthRoute = express.Router()
const Route = express.Router();
const { registerControler, loginControler } = require("../controllers/auth.controller")
const validate = require("../Middleware/validateMiddleware")
const {registerSchema} = require("../validators/auth.validator")

AuthRoute.post("/register",validate(registerSchema), registerControler);
AuthRoute.post("/login", loginControler);

//Route refresh
Route.post("/refresh", async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const decode = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET
        )

        const newAccessToken = jwt.sign(
            { userId: decode.userId },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        )
        res.json({ accessToken: newAccessToken })

    } catch (error) {
        res.status(401).json({ message: "Invalid refresh token" })

    }
})

module.exports = AuthRoute