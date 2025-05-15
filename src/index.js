const express = require('express')
const app = express()
const port = 3000
const productRoutes=require("./rooutes/product.routes")
const usuarioRoutes=require("./rooutes/Usuario.routes")

app.get('/ralf', (req, res) => {
  res.send('Holaaa, estoy programando con Node.js!')
})

app.use("/productos",productRoutes)
app.use("/usuario",usuarioRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
