module.exports = (sequelize, dataTypes) => {

    let alias = "actor";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },

        first_name: {
            type: dataTypes.STRING
        },

        last_name: {
            type: dataTypes.STRING
        },

    };

    let config ={
        tableNAme: "movies",
        timestamps: true,
        underscored: true 
    }
const Actor = sequelize.define (alias, cols, config);

Actor.associate = function(models){
    Actor.belongsToMany(models.movies, {
        as: "peliculas",
        through: "actor_movie",
        foreignKey: "actor_id",
        otherKey: "movie_id",
        timestamps: false,
    });
}

return Actor
}