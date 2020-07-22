const fs = require('fs')

// função para create
exports.post = function(req, res) {
    // req.query - quando eu precisei pegar o id da minha receita no foodfy (pq foi uma requisiçao get)
    // req.body - (aqui faz sentido pq estou fazendo uma requisição post)

    const keys = Object.keys(req.body) /* código que verifica se todos os campos estão preenchidos */

    for ( key of keys ) {

        if (req.body[key] == "") {
            return res.send('Preencha todos os campos!')
        }   
    }


    fs.writeFile("data.json", JSON.stringify(req.body), function(err){ // importante colocar uma callback function para nao bloquear o app
        if (err) return res.send("Write file error")

        return res.redirect("/instructors")
    }) 

    return res.send(req.body)
}














// função para update

// função para delete


