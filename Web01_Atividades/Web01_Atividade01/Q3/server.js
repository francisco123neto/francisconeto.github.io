const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { query } = require('express')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/receberDados', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send(`<h1> Parabéns. Formulário enviado com sucesso!! </h1>`)
})

app.listen(3003)