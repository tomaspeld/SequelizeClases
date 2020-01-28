module.exports = (sequelize, dataTypes) => {

    let alias = "genres";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        name:{
            type : dataTypes.STRING,

        },
     
    };

    let config ={
        tableNAme: "genres",
        timestamps: true,
        underscored: true 
    }
const Genero = sequelize.define (alias, cols, config);

Genero.associate = function(models){
    Genero.hasMany(models.movies, {
        as: "peliculas",
        foreignKey: "genre_id"
    });
}

return Genero
}