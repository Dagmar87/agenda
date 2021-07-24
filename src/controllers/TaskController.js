const database = require('../database/connection')

class TaskController {
    novoContato(request, response){
        const {prinome, ulnome, email, telefone} = request.body

        console.log(prinome, ulnome, email, telefone)

        database.insert({prinome, ulnome, email, telefone}).table("contato").then(data => {
            console.log(data)
            response.json({message:"Contato criado com sucesso !"})
        }).catch(error => {
            console.log(error)
        })
    }

    listarContatos(request, response){
        database.select("*").table("contato").then(contatos => {
            console.log(contatos)
            response.log(contatos)
        }).catch(error => {
            console.log(error)
        })
    }

    listarUmContato(request, response){
        const id = request.params
        database.select("*").table("contato").where({id:id}).then(contato => {
            response.json(contato)
        }).catch(error => {
            console.log(error)
        })
    }

    listarContatoPorNome(request, response){
        const prinome = request.params
        database.select("*").table("contato").where({prinome:prinome}).then(contato => {
            response.json(contato)
        }).catch(error => {
            console.log(error)
        })
    }

    listarContatoPorEmail(request, response){
        const email = request.params
        database.select("*").table("contato").where({email:email}).then(contato => {
            response.json(contato)
        }).catch(error => {
            console.log(error)
        })
    }

    atualizarContato(request, response){
        const id = request.params
        const {prinome} = request.body
        database.where({id:id}).update({prinome:prinome}).table("contato").then(data => {
            response.json({message:"Contato atualizado com sucesso"})
        }).catch(error => {
            response.json(error)
        })
    }

    removerContato(request, response){
        const id = request.params
        database.where({id:id}).del().table("contato").then(data => {
            response.json({message:"Contato removido com sucesso"})
        }).catch(error => {
            response.json(error)
        })
    }
}

module.exports = new TaskController()