let db = require('../database/models');


module.exports = {
    mostrarForm: function(req, res) {
        db.notitas.findByPk(req.params.id)
        .then(function(unaNota) {
            res.render('detail', {unaNota: unaNota})
        })
    },
    crear: function(req, res) {
        db.notitas.create({
            titulos: req.body.title,
            mensajes: req.body.mensajes
        })
        .then(function(notas){
            res.redirect("/")
        })
    },
    borrar: function(req, res) {
        db.notitas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then (function(){
            res.redirect('/')
        })
    },
    editar: function(req, res){     
        db.notitas.update({
            titulos: req.body.title,
            mensajes: req.body.mensajes
        }, { 
            where: {id: req.params.id}
        })
        .then(function(){
            res.redirect('/')
    });
} }