import { Request, Response, Router } from 'express';
import { getTasks, saveTasks, updateTask } from './controller/TasksController';
import { deleteTask } from './controller/TasksController';
import { finishedTask } from './controller/TasksController';

const routes = Router()

routes.get('/home',(request: Request, response: Response) => {
    return response.json({message:'hello turma 007'})
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTasks)
routes.get('/tasks/:id', getTasks)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)

export default routes