"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRouter = (0, express_1.Router)();
const todo = [];
todoRouter.get('/', (req, res) => {
    res.status(200).send({ message: "Welcome", todo: todo });
});
todoRouter.post('/add-todo', (req, res) => {
    todo.push(req.body);
    res.status(201).json({ todo: todo });
});
todoRouter.put('/update-todo', (req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    const todoIndex = todo.findIndex(todo => todo.id === id);
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: id, text: text };
        res.status(201).json({ mesaage: "Updated", todo: todo });
    }
    else
        res.status(404).json({ message: "ToDo not found!" });
});
todoRouter.delete('/delete-todo/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todo.findIndex(todo => todo.id === id);
    if (todoIndex >= 0) {
        todo.splice(todoIndex, 1);
        res.status(200).json({ message: "Deleted", todo: todo });
    }
    else
        res.status(401).json({ message: "ToDo not found!" });
});
exports.default = todoRouter;
