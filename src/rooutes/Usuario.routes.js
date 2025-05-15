const router = require("express").Router()

router.get("/login",(req, res) =>{
    res.status(200).json({
        "usuario":"Intentando entrar"
    })
})
module.exports=router