  
module.exports = function(sequelize, dataTypes) {
    let alias = "notitas";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        titulos: {
            type: dataTypes.STRING,
            notNull: true
            },
        mensajes: {
            type: dataTypes.STRING,
            notNull: true
            }
        }

    let config = {
            tableName: 'notitas',
            timestamps: false,
            
            };

    const notitas = sequelize.define(alias, cols, config);
    return notitas;
    
    }