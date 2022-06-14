const express = require("express");
const router = express.Router();
const vizualizarPessoaId = require('./pessoas');
const { listaBoletos } = require('./listaBoletos');
const { vizualizarUsuarioId } = require("./usuarios");

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

//GET BOLETOS POR ID DA PESSOA
router.get('/pessoa/:id', (req, res) => {
    const idPessoa = req.params.id;
    res.send(vizualizarBoletosPessoa(idPessoa));
})

function vizualizarBoletosPessoa(idPessoa){
    const listaBoletosPessoa = [];
    listaBoletos.forEach(boleto => {
        if(boleto.idPessoa == idPessoa){
                listaBoletosPessoa.push(boleto);
            }
    });
    return listaBoletosPessoa;
}

//POST BOLETO
router.post('/', (req, res) => {
    const boleto = req.body;
    res.send(inserirBoleto(boleto));
});

function inserirBoleto(boleto){
    if(boleto.valor <= 0 && boleto.idPessoa != "" && boleto.idUser != ""){
        if(vizualizarPessoaId(boleto.idPessoa) == undefined){
            console.log("Pessoa não encontrada.");
        } else if (vizualizarUsuarioId(boleto.idUsuario) == undefined){
            console.log("Usuário não encontrado.")
        } else{
            const pessoa = vizualizarPessoaId(boleto.idPessoa);
            boleto.nome = pessoa.nome;
            boleto.id = listaBoletos.length + 1;
            listaBoletos.push(boleto);
            return listaBoletos;
        }
    } else{
        console.log("Erro nos dados inseridos.")
    }    
}

//PUT BOLETO
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

