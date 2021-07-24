const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/novoContato', TaskController.novoContato)

router.get('/contatos', TaskController.listarContatos)

router.get('/contato/:id', TaskController.listarUmContato)

router.get('/contato/:prinome', TaskController.listarContatoPorNome)

router.get('/contato/:email', TaskController.listarContatoPorEmail)

router.put('/atualizar/contato/:id', TaskController.atualizarContato)

router.delete('/delete/contato/:id', TaskController.removerContato)

module.exports = router