const usersController = require('../controllers/usersController');

module.exports = (app) => {

    // GET -> obtener datos
    // Post -> Almacenar datos
    // Put -> Actualizar datos
    // Delete -> Eliminar datos

    app.post('/api/users/create', usersController.register);
}