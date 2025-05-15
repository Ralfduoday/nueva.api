const router = require("express").Router()

router.get("/create",(req, res) =>{
    res.status(200).json({
        "mesa":"hola"
    })
})

router.get("/list", (req, res) =>{
    res.status(200).json({
        "mensaje":"lista de productos"
    }
)})
router.get("/id", (req, res) =>{
    res.status(200).json({
        "mensaje":"Estos son los datos del producto"
    }
)})

module.exports=router
