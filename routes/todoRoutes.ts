import {Router} from 'express';
import Todo from "../models/todo";

const todoRouter=Router();

const todo:Todo[]=[];

todoRouter.get('/', (req:any, res:any)=>{
    res.status(200).send({message:"Welcome", todo:todo});
});

todoRouter.post('/add-todo', (req:any,res:any)=>{
    todo.push(req.body);
    res.status(201).json({todo:todo});
});

todoRouter.put('/update-todo', (req:any, res:any)=>{
    const id = req.body.id;
    const text = req.body.text;
    const todoIndex = todo.findIndex(todo=> todo.id===id);
    if(todoIndex>=0)
    {
        todo[todoIndex] = {id:id, text:text};
        res.status(201).json({mesaage:"Updated", todo:todo});
    }
    else
        res.status(404).json({message:"ToDo not found!"});
    
});

todoRouter.delete('/delete-todo/:id', (req:any, res:any)=>{
    const id = req.params.id;
    const todoIndex = todo.findIndex(todo=> todo.id===id);

    if(todoIndex>=0)
    {
        todo.splice(todoIndex, 1);
        res.status(200).json({message:"Deleted", todo:todo});
    }
    else
    res.status(401).json({message:"ToDo not found!"});
});

export default todoRouter;