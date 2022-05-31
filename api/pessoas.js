const express = require("express");
const router = express.Router();

const listaPessoas = [];

//GET DA LISTA DE PESSOAS
router.get('/', (req, res) => {
    res.send(vizualizarLista());
});

function vizualizarLista(){
    return listaPessoas;
}

module.exports = {
    router,
    vizualizarLista
}
