const express = require("express");
const router = express.Router();

const listaBoletos = [
    {
        id : 1,
        valor: "1000",
        idUsuario: 1,
        idPessoa: 5,
        nomePessoa: "a",
        status: "aberto"
    },
    {
        id : 2,
        valor: "2000",
        idUsuario: 2,
        idPessoa: 5,
        nomePessoa: "b",
        status: "aberto"
    },
    {
        id : 3,
        valor: "3000",
        idUsuario: 2,
        idPessoa: 1,
        nomePessoa: "c",
        status: "pago"
    }
]

module.exports = {
    router,
    listaBoletos
}