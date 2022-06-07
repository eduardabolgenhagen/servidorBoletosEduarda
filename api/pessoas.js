const express = require("express");
const router = express.Router();

const listaPessoas = [
    {
        id : 1,
        nome: "Eduarda",
        cpf: "123.456.789-00"
    },
    {
        id : 3,
        nome: "Ester",
        cpf: "123.456.789-00"
    }
];

//GET DA LISTA DE PESSOAS
router.get('/', (req, res) => {
    res.send(vizualizarLista());
});

function vizualizarLista(){
    return listaPessoas;
}

//GET PESSOA POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(vizualizarPessoaId(id));
})]

function vizualizarPessoaId(id){
    const pessoa = listaPessoas.find(p => p.id == id);
    return pessoa;
}

module.exports = {
    router,
    vizualizarLista
}
