const express = require("express");
const router = express.Router();

const listaPessoas = [
    {
        id : 1,
        nome: "Eduarda",
        cpf: "123.456.789-00"
    },
    {
        id : 2,
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
};

//GET PESSOA POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(vizualizarPessoaId(id));
});

function vizualizarPessoaId(id){
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id);
    return pessoa;
};

//POST PESSOA
router.post('/', (req, res) => {
    const pessoa = req.body;
    res.send(inserirPessoa(pessoa));
});

function inserirPessoa(pessoa){
    pessoa.id = listaPessoas.length +1;
    listaPessoas.push(pessoa);
    return listaPessoas;
};

//PUT PESSOA
router.put('/alterar/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    res.send(alterarDadosPessoa(id, pessoa));
});

function alterarDadosPessoa(id, pessoa){
    const index = listaPessoas.findIndex(pessoa => pessoa.id ==id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    return pessoa;
};

//DELETE PESSOA
router.delete('/deletar/:id', (req, res) => {
    const id = req.params.id;
    res.send(deletarPessoa(id));
});

function deletarPessoa(id){
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);
    listaPessoas.splice(index, 1);
    return listaPessoas;
}

module.exports = {
    router,
    vizualizarLista
}
