const validate = (schema) => (req,res,next) =>{
    const { error } = schema.validate(req.body)
    console.log(">>>error: ", error)

    if (error){
        return res.status(400).json({
            message: error
        })
    }
    next()
}
module.exports = validate