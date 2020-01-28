const fs = require("fs") ;
const path = require ("path")
let db = require("../dataBase/models");

const moviesController ={

     list : function(req, res) {
         db.movies.findAll()
            .then(function(movies){
          res.render("listadoDePeliculas", {movies:movies})
        })

            .catch(err => {
                res.send("hubo un error,intentalo mas tarde")
            })
  },



  listDetailid : function(req, res){
    db.movies.findByPk(req.params.id, {
      include: [{association: "genero"}, {association: "actores"}]
    })
        .then(function(movie){
          res.render("listaDetalleId", {movie:movie})
        })
        .catch(err => {
            res.send("hubo un error,intentalo mas tarde")
        })

  },

           crear: function(req, res){
             db.genres.findAll()
               .then(function(genres){
                 res.render("createPeliculas",{genres:genres})
               })
               .catch(err => {
                res.send("hubo un error,intentalo mas tarde")
            })
           },
    
           guardado: function(req, res){            
            db.movies.create({
              title: req.body.titulo,
              awards: req.body.premios,
              release_date: req.body.fecha_estreno,
              genre_id: req.body.genero,
              length:req.body.duracion,
              rating: req.body.rating, 
            });

            res.redirect("/movies")
          },

          editar: function(req, res){
            let pedidoPelicula = db.movies.findByPk(rep.params.id);

            let pedidoGeneros = db.genres.findAll();

            Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([movies,genres]) {
              res.render("editarPleicula", {movies:movies, genres:genres});
            })

          }, 

          actualizar: function(req, res){
            db.movies.update({
              title: req.body.titulo,
              awards: req.body.premios,
              release_date: req.body.fecha_estreno,
              genre_id: req.body.genero,
              length:req.body.duracion,
              rating: req.body.rating, 

            },  {
              where: req.params.id,
            });
            res.redirect("/movies" + req.params.id)

          },


          borrar: function(req, res){
            db.movies.destroy({
              where: {
                id: req.params.id
              }
            })
            res.redirect("/movies");
          }

          
             
             
}


  module.exports=moviesController











  /*         new: function(req, res) {
            db.movies.findAll({
                where: {
                    order:["precio", "ASC"],
                    limit: 5
            }
        })
               .then(function(movies){
             res.render("listadoDePeliculas", {movies:movies})
           })
   
               .catch(err => {
                   console.log(err);
                   res.send("hubo un error,intentalo mas tarde")
               })
     },

     

       recommended : function(req, res) {
          res.render("recomendados", {movies:movies})
    
},*/




  