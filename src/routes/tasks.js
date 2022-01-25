const express = require('express');//Se requiere a express
const router = express.Router();// Se crea objeto con método router

const Task = require('../models/Task');// Se requiere el modelo

// Se crean rutas para obtener datos por http
router.get('/', async(req, res) =>{//Para evitar trabajar con Callbacks o promesas
     const tasks = await Task.find();//Hace consulta a la BD y la almacena en task
     res.json(tasks);// Responde al navegador con la data
    });

router.get('/:id', async(req,res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/', async (req,res) =>{//Para comunicarse con el cliente por POST
    const task = new Task(req.body);//Se crea una tarea con los datos del request body
    await task.save();//Guarda el objeto creado
    res.json({
        status:'Task Saved'//reporta que se guarda el objeto
    });
});

router.put('/:id',async (req,res) => {//método put que pide id del objeto a modificar
    await Task.findByIdAndUpdate(req.params.id, req.body);//en el req van los params y el param.
    res.json({
        status: 'Task Updated'
    });
});

router.delete('/:id',async (req,res) => {//método delete que pide id del objeto a eliminar
    await Task.findByIdAndRemove(req.params.id);//en el req van los params y el param.
    res.json({
        status: 'Task Deleted'
    });
});


module.exports = router;//Se exporta el objeto router