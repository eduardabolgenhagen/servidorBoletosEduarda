const express = require("express");
const router = express.Router();

const listaUsuarios = [
    {
        id : 1,
        nome: "Bruno",
        senha: "123"
    },
    {
        id : 2,
        nome: "Eduardinha",
        senha: "123"
    }
];

//GET DA LISTA DE USUARIOS
router.get('/', (req, res) => {
    res.send(vizualizarLista());
});

function vizualizarLista(){
    return listaUsuarios;
};

//GET USUARIOS POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(vizualizarUsuarioId(id));
});

function vizualizarUsuarioId(id){
    const usuario = listaUsuarios.find(p => p.id == id);
    return usuario;
};

//POST USUARIOS
router.post('/', (req, res) => {
    const usuarios = req.body;
    res.send(inserirUsuario(usuario));
});

function inserirUsuario(usuario){
    usuario.id = listaUsuarios.length +1;
    listaUsuarios.push(usuario);
    return listaUsuarios;
};

//PUT USUARIOS
router.put('/alterar/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    res.send(alterarDadosUsuario(id, usuario));
});

function alterarDadosUsuario(id, usuario){
    const index = listaUsuarios.findIndex(usuario => usuario.id ==id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
    return usuario;
};

//DELETE USUARIOS
router.delete('/deletar/:id', (req, res) => {
    const id = req.params.id;
    res.send(deletarUsuario(id));
});

function deletarUsuario(id){
    const index = listaUsuarios.findIndex(usuario => usuario.id == id);
    listaUsuarios.splice(index, 1);
    return listaUsuarios;
}

module.exports = {
    router,
    vizualizarLista
}
