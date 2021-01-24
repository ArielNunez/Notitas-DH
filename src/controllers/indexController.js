let db = require('../database/models');



module.exports = {
    index: function(req,res) {
        db.sequelize.query("SELECT * FROM notitas")
        .then(function(notas) {
            res.render('index', {notas: notas[0]})
        })
    }
}