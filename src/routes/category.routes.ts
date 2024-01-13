import { FastifyInstance } from "fastify";
import { CategoryUseCases } from "../models/usecases/category.usecases";
import { Category, CreateCategory, GetCategory } from "../models/interfaces/category.interface";

export async function categoryRoutes(fastify: FastifyInstance)
{
    const categoryUseCases = new CategoryUseCases();

    // POST FUNCS
    fastify.post<{ Body: CreateCategory }>('/', (req, rep) => {
        const { title } = req.body;
        try {
            const data = categoryUseCases.create({ title });
            rep.send(data);
        } catch (err) {
            rep.send(err)
        }
    })


    // GET FUNCS
    fastify.get<{ Params: { id: string } }>('/:id', async (req, rep) => {
        const { id } = req.params
        try {
            const data = await categoryUseCases.getOne({ id });
            return rep.send(data);
        } catch(err) {
            rep.send(err);
        }
    })

    fastify.get('/', async (req, rep) => {
        try {
            const data = await categoryUseCases.getAll();
            return rep.send(data);
        } catch(err) {
            rep.send(err);
        }
    })
}