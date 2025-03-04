const Task = require ("../models/tasks.model")


const addTask  = async (req,res)=> {
    try{
        console.log("Usuario autenticado", req.user)
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            userId:req.user,
        })
        await newTask.save()
         return res.status(400).json({msg:"Tarea creada"})
    }catch(error){
        console.log(error);
        
        return res.status(200).json({msg:"Error al crear la tarea"})
    }
}

const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user });
        return res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener tareas', error });
    }
}


module.exports={
    addTask,
    getUserTasks
}

