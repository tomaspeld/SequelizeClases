var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController.js")


/* GET movies list page. */
router.get('/', moviesController.list);


/* GET movies create page. */
router.get('/create', moviesController.crear);
router.post('/create', moviesController.guardado);

/* GET movies id page. */
router.get('/:id', moviesController.listDetailid);  

/* Actualizaicon */
router.get('/editar/:id', moviesController.editar);
router.put('/editar/:id', moviesController.actualizar);

/* Borrar */
router.delete('/borrar/:id', moviesController.borrar);





module.exports = router;








/*/* GET movies id page. 
router.get('/new', moviesController.new);


/* GET movies id page. 
router.get('/recommended', moviesController.recommended);*/