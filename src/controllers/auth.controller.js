const {login, register} = require("../services/auth.service")

const registerControler =  async (req,res) =>{
    let {name , email ,password} = req.body;
    let result =await register(name,email,password);
    res.status(200).json({
        result: result,
        message: "register suscess"
    })
};

const loginControler = async (req,res) =>{
    let {email, password} = req.body;
    let result = await login(email,password);
    res.status(200).json({
        token: result,
        message: "login suscess"
    })
    
}

module.exports = {registerControler,loginControler}