import { FastifyInstance } from "fastify";
import { FinanceUseCase } from "../models/usecases/finance.usecases";
import { CreateFinance } from "../models/interfaces/finance.interface";

export async function financeRoutes(fastify: FastifyInstance)
{
    const financeUseCase = new FinanceUseCase();
    fastify.post<{ Body: CreateFinance }>('/', async (req, rep) => {
        const { price, description, categoryId } = req.body;
        try {
            const res = await financeUseCase.create({ price, description, categoryId });
            return rep.send(res);
        } catch (err) {
            rep.send(err)
        }
    })

    fastify.get('/',  async (req, rep) => {
        try {
            const res = await financeUseCase.getAll();
            return rep.send(res);
        } catch (err) {
            rep.send(err)
        }
    })
}