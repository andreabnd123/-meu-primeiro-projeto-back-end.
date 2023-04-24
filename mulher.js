const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
  response.json({ 
    nome: 'Andrea Nogueira',
    imagem: 'https://avatars.githubusercontent.com/u/105224934?v=4', 
    minibio: "Futura desenvolvedora"
  })
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta", porta); 
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)