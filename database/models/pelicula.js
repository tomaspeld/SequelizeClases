module.exports = (sequelize, dataTypes) => {

    let alias = "movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        title: {
            type: dataTypes.STRING,
            allowNull: false

        },
        awards:{
            type: dataTypes.INTEGER
        },
        rating:{
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
         },
         genre_id: {
             type: dataTypes.INTEGER
         },
         release_date:{
             type: dataTypes.DATE
         },

         

    };

    let config ={
        tableNAme: "movies",
        timestamps: true,
        underscored: true 
    }
const Pelicula = sequelize.define (alias, cols, config);

Pelicula.associate = function(models){
    Pelicula.belongsTo(models.genres, {
        as: "genero",
        foreignKey: "genre_id"
    });
    Pelicula.belongsToMany(models.actor, {
        as: "actores",
        through: "actor_movie",
        foreignKey: "movie_id",
        otherKey: "actor_id",
        
    });
}

return Pelicula
}