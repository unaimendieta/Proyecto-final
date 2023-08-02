const express = require("express");
const productRoutes = express.Router();
const controller = require("../controllers/product.controller");

productRoutes.get("/", controller.getAllProducts);
productRoutes.get("/getPopular", controller.getPopularProducts);
productRoutes.get("/getRecent", controller.getRecentProducts);
productRoutes.get("/filteredProducts/:filter", controller.getProductsFiltered);
productRoutes.get("/getById/:id", controller.getProductById);
productRoutes.get("/getRelatedProducts/:id", controller.getRelatedProducts);

module.exports = productRoutes;