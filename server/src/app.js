const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const mongoose = require('mongoose');
require('dotenv').config()


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error al connectar la base de datos");
    }
    app.listen(process.env.PORT, () => console.log('Servidor en ejecución en el puerto', process.env.PORT));
}


startServer();