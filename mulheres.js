const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria Conceição',
        imagem: 'https://avatars.githubusercontent.com/u/50921892?v=4',
        minibio: 'Desenvolvedora e istrutora'
    }, 
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora programaMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_800_800/0/1679701313082?e=1687996800&v=beta&t=KuzuVsVIaBcRpZm19HRsT9iWIqE7aTOhDqTJjW8BoJo',
        minibio: 'Hacker antirracista'
    },
]

function mostreMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta", porta); 
}

app.use(router.get('/mulheres', mostreMulheres))
app.listen(porta, mostraPorta)