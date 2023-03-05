const { Router } = require('express')
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const UsersController = require('../controllers/usersController')
const UserAvatarController = require('../controllers/userAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const usersRoute = Router()
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController() /*estou instanciando a classe na memoria*/
const userAvatarController = new UserAvatarController();

usersRoute.post('/', usersController.create);
usersRoute.put('/', ensureAuthenticated, usersController.update);
usersRoute.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update); 

module.exports = usersRoute
