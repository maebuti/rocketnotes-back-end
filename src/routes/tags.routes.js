const {Router} = require("express");
const TagsController = require("../controllers/tagsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const tagsRoutes = Router();

const tagsController = new TagsController(); /*estou instanciando a classe na memoria*/

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;