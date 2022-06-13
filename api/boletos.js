const express = require("express");
const router = express.Router();

const listaBoletos = [
    {
        id : 1,
        valor: "1000",
        idUsuario: 1,
        idPessoa: 1,
        nomePessoa: "a",
        status: "aberto"
    },
    {
        id : 2,
        valor: "2000",
        idUsuario: 2,
        idPessoa: 2,
        nomePessoa: "b",
        status: "aberto"
    }
];

//GET DA LISTA DE BOLETOS
router.get('/', (req, res) => {
    res.send(vizualizarLista());
});

function vizualizarLista(){
    return listaBoletos;
};

//GET BOLETOS POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(vizualizarBoletosId(id));
});

function vizualizarBoletosId(id){
    const boleto = listaBoletos.find(boleto => boleto.id == id);
    return boleto;
};

//POST BOLETO
router.post('/', (req, res) => {
    const boleto = req.body;
    res.send(inserirBoleto(boleto));
});

function inserirBoleto(boleto){
    boleto.id = listaBoletos.length + 1;
    listaBoletos.push(boleto);
    return listaBoletos;
}

//PUT BOLETO
router.put('/alterar/:id', (req, res) => {
    const id = req.params.id;
    const boleto = req.body;
    res.send(alterarDadosBoleto(id, boleto));
});

function alterarDadosBoleto(id, boleto){
    const index = listaBoletos.findIndex(boleto => boleto.id ==id);
    boleto.id = id;
    listaBoletos[index] = boleto;
    return boleto;
};

//DELETE BOLETOS
router.delete('/deletar/:id', (req, res) => {
    const id = req.params.id;
    res.send(deletarBoletos(id));
});

function deletarBoletos(id){
    const index = listaBoletos.findIndex(boleto => boleto.id == id);
    listaBoletos.splice(index, 1);
    return listaBoletos;
}

module.exports = {
    router,
    vizualizarLista
}
