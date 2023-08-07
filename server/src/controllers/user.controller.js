const controller = {};
const fs = require("fs/promises");
const path = require("path");
const UserModel = require("../../schemes/user.schemes");


controller.getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) return res.status(404).send({ error: "Usuario no encontrado" });
        res.send({ data: user });
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
controller.updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.id);
        if (!user) return res.status(404).send({ error: "Usuario no encontrado" });
        
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.plan = req.body.plan;
        user.liked = req.body.liked;
        user.save();
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
controller.createUser = async (req, res) => {
    try {
        const newUser = UserModel({
            _id: req.body.id,
            name: req.body.name,
            surname: req.body.surname,
            plan: req.body.plan,
            payments: [],
            liked: [],
          });
          console.log(newUser);
          await newUser.save() ; 
        res.end();
    } catch (error) {
        res.send({ error: "Error al escribir archivo" });
    }
}
module.exports = controller;