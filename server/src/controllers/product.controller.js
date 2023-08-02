const controller = {};
const fs = require("fs/promises");
const path = require("path");
const ProductModel = require("../../schemes/product.schemes");
const productFile = path.resolve(__dirname, "../../data/products.json");

controller.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: "Error al leer la base de datos" });
    }
}
controller.getProductsFiltered = async (req, res) => {

    try {
        const filters = req.params.filter.split("$");
        let products = await ProductModel.find();
        filters.forEach(filter => {
            let filterType = filter.split("=")[0];
            let filtervalue = filter.split("=")[1];
            switch (filterType) {
                case "orderBy":
                    switch (filtervalue) {
                        case "recent":


                            products = products.slice().sort((a, b) => new Date(b["creation"]) - new Date(a["creation"]));

                            break;
                        case "popular":
                            products = products.slice().sort((a, b) => b["views"] - a["views"]);

                            break;

                        default:
                            break;
                    }
                    break;

                default:
                    break;
            }
        });
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: "Error al leer la base de datos" });
    }
}
controller.getPopularProducts = async (req, res) => {
    try {
        const data = await ProductModel.find();
        const sortedArray = data.slice().sort((a, b) => b["views"] - a["views"]);
        res.send({ data: sortedArray });
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
controller.getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) return res.status(404).send({ error: "Usuario no encontrado" });
        res.send({ data: product });
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
controller.getRelatedProducts = async (req, res) => {
    try {

        const allProducts = await ProductModel.find();
        const product = await ProductModel.findById(req.params.id);
        if (!product) return res.status(404).send({ error: "Producto no encontrado" });
        const filteredArray = allProducts.filter(products => products.category === product.category && products._id !== product._id);
        const finalArray = filteredArray.slice(0, 4);
        res.send({ data: finalArray });
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
controller.getRecentProducts = async (req, res) => {
    try {

        const data = await ProductModel.find();
        const sortedArray = data.slice().sort((a, b) => new Date(b["creation"]) - new Date(a["creation"]));
        res.send({ data: sortedArray });
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}



module.exports = controller;